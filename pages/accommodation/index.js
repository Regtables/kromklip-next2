import React, { useState } from 'react'
import { Grid } from '@mui/material'
// import { getPlaiceholder } from 'plaiceholder'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './Accommodation.module.scss'
import { client, urlFor } from '../../utils/client'
import { accommodationQuery } from '../../utils/queries'
import { renderPageIcon } from '../../utils/helpers'

import PageBanner from '../../components/PageBanner/PageBanner'
import AccommodationCard from '../../components/AccommodationCard/AccommodationCard'
import ContactNow from '../../components/ContactNow/ContactNow'
import ImagePreview from '../../components/ImagePreview/ImagePreview'

import banner from '../../public/accommodation-banner.jpg'

const AccommodationPage = ({ accommodation }) => {
  const { text, bannerImage, heading: { main, sub }, accomodation: types, functions } = accommodation
  const router = useRouter()
  const [activeImage, setActiveImage] = useState()
  const [showPreview, setShowPreview] = useState(false)

  const handleImageClick = (image) => {
    setActiveImage(image)
    setShowPreview(true)
  }

  const renderAmenitiesIcon = (amenity) => {
    if(amenity === 'catering'){
      return (
        <p></p>
      )
    }
  }

  return (
    <div className= {`${styles.container}`}>
      <PageBanner image = {banner} />

      <div className= {`${styles.content} page__margin`}>
        <header className= 'heading'>
          {renderPageIcon(router.pathname)}
          <h1>{main}</h1>
          <p>{sub}</p>
        </header>

        {/* <div className= {styles.text}>
          {text.map((para, i) => (
            <p key = {i}>{para.children[0].text}</p>
          ))}
        </div> */}

        <div className= {styles.types}>
          <Grid container spacing = {2}>
            {types.map((type, i) => (
              <Grid item md = {4} key = {i} justifyContent = 'center'>
                <AccommodationCard accommodation={type} renderIcon = {renderAmenitiesIcon} handleImageClick = {handleImageClick}  />
              </Grid>
            ))}
          </Grid>
        </div>

        <div className= {styles.functions}>
          <div className= {styles.subHeading}>
            <h3>{functions.heading.main}</h3>
            <p>{functions.heading.sub}</p>
          </div>

          <div className= {styles.text}>
            {functions.text.map((para, i) => (
              <p key = {i}>{para.children[0].text}</p>
            ))}
          </div>

          <div className= {styles.button}>
            <Link href = '/functions'>
              <ContactNow text = 'view our functions' />
            </Link>
          </div>
        </div>
      </div>
      {showPreview && (
        <ImagePreview activeImage={activeImage} showPreview = {showPreview} setShowPreview = {setShowPreview} />
      )}
    </div>
  )
}

export const getStaticProps = async () => {
  const accommodationData = await client.fetch(accommodationQuery())

  // const accommodationTypes = await Promise.all(
  //   accommodationData.accomodation.map(async (type) =>  {
  //     const src = urlFor(type.image).url()
  //     const { base64 } = await getPlaiceholder(src)

  //     const variations = await Promise.all(
        
  //     )
  //   })
  // )

  return {
    props: {
      accommodation: accommodationData[0]
    }
  }
}

export default AccommodationPage