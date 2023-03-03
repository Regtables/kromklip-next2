import React, { useState, useEffect } from 'react'
import { GiPartyPopper } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { getPlaiceholder } from 'plaiceholder'
import { useRouter } from 'next/router'

import banner from '../../public/fish10.jpeg'
import styles from './Facilities.module.scss'
import { client, urlFor } from '../../utils/client'
import { facilitiesQuery } from '../../utils/queries'
import { renderPageIcon } from '../../utils/helpers'

import FacilitiesTabs from '../../components/FacilitiesTabs/FacilitiesTabs'
import FacilitySection from '../../components/FacilitySection/FacilitySection'
import ContactNow from '../../components/ContactNow/ContactNow'
import PageBanner from '../../components/PageBanner/PageBanner'
import ImagePreview from '../../components/ImagePreview/ImagePreview'


const FacilitiesPage = ({ facilitiesPage: data, facilitiesData }) => {
  const { heading: { main, sub }, facilities } = data
  const [activeSection, setActiveSection] = useState(facilitiesData[0])
  const [animateSection, setAnimateSection] = useState({})
  const router = useRouter()
  const [activeImage, setActiveImage] = useState()
  const [showPreview, setShowPreview] = useState(false)

  // console.log(facilities)

  const handleImageClick = (image) => {
    setActiveImage(image)
    setShowPreview(true)
  }

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
      <PageBanner image = {banner} alt = 'things to do' />
      
      <div className= 'page__margin'>
        <header className='heading'>
          {renderPageIcon(router.pathname)}
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
            <FacilitySection facility={activeSection} handleImageClick = {handleImageClick} />

            <div className= {styles.contact}>
              <ContactNow text = 'contact us' />
            </div>
          </motion.div>
          
        </main>

      </div>
    {showPreview && (
      <ImagePreview activeImage={activeImage} showPreview = {showPreview} setShowPreview = {setShowPreview} />
    )}
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