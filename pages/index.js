import Head from 'next/head';
import Image from 'next/image';
import { GiBoatFishing } from 'react-icons/gi'

import styles from '../styles/Home.module.scss';
import { client } from '../utils/client';
import { homeQuery } from '../utils/queries';


import Hero from '../components/Hero/Hero';
import HomeHeading from '../components/HomeHeading/HomeHeading';
import Carousel from '../components/Carousel/Carousel';
import ImageTile from '../components/ImageTile/ImageTile';
import About from '../components/About/About';
import Pets from '../components/Pets/Pets';
import ContactNow from '../components/ContactNow/ContactNow';

export default function Home({ home }) {
  const { video, heading, images, about } = home
	return (
		<div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
      </Head>
			<div className={styles.hero}>
				<Hero />
			</div>

			<header>
				<HomeHeading />
			</header>

      <div className= {styles.carousel}>
        <Carousel>
          {images.map((image, i) => (
            <div style = {{minWidth: '100%'}} key = {i}>
              <ImageTile 
                image={image}
                alt = 'kromklip scenery'
              />
            </div>
          ))}
        </Carousel>

      </div>

      <div className= {styles.fishing}>
        <p>
          <GiBoatFishing />
        </p>
      </div>

      <div className= {styles.about}>
        <About about={about} />
      </div>

      <div className= {styles.pets}>
        <Pets />
      </div>

      {/* <div className= {styles.book}>
        <div className= {styles.text}>
          <p>Day visitors welcome! Please book in advance</p>
        </div>

        <div className= {styles.button}>
          <button>Contact us now</button>
        </div>
      </div> */}
      <ContactNow />
		</div>
	);
}

export const getStaticProps = async () => {
  const homeData = await client.fetch(homeQuery())

  return {
    props: {
      home: homeData[0]
    }
  }
}