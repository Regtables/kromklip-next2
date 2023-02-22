import React, { useState, useEffect } from 'react'
import { GiPartyPopper } from 'react-icons/gi'
import { motion } from 'framer-motion'

import banner from '../../public/fish10.jpeg'
import styles from './Facilities.module.scss'
import { client, urlFor } from '../../utils/client'
import { facilitiesQuery } from '../../utils/queries'
import FacilitiesTabs from '../../components/FacilitiesTabs/FacilitiesTabs'
import FacilitySection from '../../components/FacilitySection/FacilitySection'
import ContactNow from '../../components/ContactNow/ContactNow'
import PageBanner from '../../components/PageBanner/PageBanner'
import { getPlaiceholder } from 'plaiceholder'

const FacilitiesPage = ({ facilitiesPage: data, facilitiesData }) => {
  const { heading: { main, sub }, facilities } = data
  const [activeSection, setActiveSection] = useState(facilitiesData[0])
  const [animateSection, setAnimateSection] = useState({})

  // console.log(facilities)

  console.log(facilitiesData)

  const handleTabClick = (facility) => {
    
    setAnimateSection({y: 50, opacity: 0})

    setTimeout(() => {
      setActiveSection(facility)
    }, 300)
    
    setTimeout(() => {
      setAnimateSection({y: 0, opacity: 1})
    }, 500);
  }

  return (
    <div className= {`${styles.container}`}>
      {/* <PageBanner image = {banner} alt = 'things to do' /> */}
      
      <div className= 'page__margin'>
        <header className='heading'>
          <h1>{main}</h1>
          <p>{sub}</p>
          {/* <p><GiPartyPopper /></p> */}
        </header>

        <main className= {styles.content}>
          <div className= {styles.tabs}>
            <FacilitiesTabs 
              facilities={facilitiesData} 
              activeSection = {activeSection}
              handleClick = {handleTabClick}
          />
          </div>

          <motion.div className= {styles.activeSection} animate = {animateSection} transition = {{duration: 0.4, ease: 'easeInOut'}}>
            <FacilitySection facility={activeSection} />

            <div className= {styles.contact}>
              <ContactNow />
            </div>
          </motion.div>
          
        </main>

      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const facilitiesData = await client.fetch(facilitiesQuery())

  const facilities = await Promise.all(
    facilitiesData[0].facilities.map(async (facility) => {
      const imagesArr = await Promise.all(
        facility.images.map(async (image) => {
          const { base64 } = await getPlaiceholder(urlFor(image).url())
  
          return {
            image: image,
            base64: base64
          }
        })
      )
  
      return {
        facility: facility,
        images: imagesArr
      }
    })
  ) 
  
  console.log(facilities)

  return {
    props: {
      facilitiesPage: facilitiesData[0],
      facilitiesData: facilities
    }
  }
}

export default FacilitiesPage