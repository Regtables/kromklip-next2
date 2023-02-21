import React, { useState, useEffect } from 'react'
import { GiPartyPopper } from 'react-icons/gi'
import { motion } from 'framer-motion'

import banner from '../../public/fish10.jpeg'
import styles from './Facilities.module.scss'
import { client } from '../../utils/client'
import { facilitiesQuery } from '../../utils/queries'
import FacilitiesTabs from '../../components/FacilitiesTabs/FacilitiesTabs'
import FacilitySection from '../../components/FacilitySection/FacilitySection'
import ContactNow from '../../components/ContactNow/ContactNow'
import PageBanner from '../../components/PageBanner/PageBanner'

const FacilitiesPage = ({ facilities: data }) => {
  const { heading: { main, sub }, facilities } = data
  const [activeSection, setActiveSection] = useState(data?.facilities?.find((item) => item.name.toLowerCase() === '4x4 trail'))
  const [animateSection, setAnimateSection] = useState({})

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
          <h1>{main}</h1>
          <p>{sub}</p>
          {/* <p><GiPartyPopper /></p> */}
        </header>

        <main className= {styles.content}>
          <div className= {styles.tabs}>
            <FacilitiesTabs 
              facilities={facilities} 
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

  return {
    props: {
      facilities: facilitiesData[0]
    }
  }
}

export default FacilitiesPage