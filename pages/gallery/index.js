import React from 'react';
import { Grid } from '@mui/material';
import { getPlaiceholder } from 'plaiceholder';

import styles from './Gallery.module.scss';
import { client, urlFor } from '../../utils/client';
import { galleryQuery } from '../../utils/queries';

import ImageTile from '../../components/ImageTile/ImageTile';

const GalleryPage = ({ gallery, images }) => {
	const { heading: { main, sub } } = gallery;

	return (
		<div className={`${styles.container} page__margin`}>
			<header className='heading'>
				<h1>{main}</h1>
				<p>{sub}</p>
			</header>

      <main className= {styles.gallery}>
        <Grid container spacing = {1}>
          {images.map((image, i) => (
            <Grid item md = {4} key = {i}>  
              <div className= {styles.image}>
                <ImageTile image={image} alt = 'visitor gallery' />
              </div>
            </Grid>
          ))}
        </Grid>
      </main>
		</div>
	);
};

export const getStaticProps = async () => {
	const galleryData = await client.fetch(galleryQuery());

	const images = await Promise.all(
		galleryData[0].images.map(async (image) => {
		  const { base64 } = await getPlaiceholder(urlFor(image).url())
	
		  return {
			image: image,
			base64: base64
		  }
		})
	)

	return {
		props: {
			gallery: galleryData[0],
			images: images
		},
	};
};

export default GalleryPage;
