import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { BiChair } from 'react-icons/bi'
import { GiBoatFishing, GiCampfire, GiCampingTent, GiBroom, GiWineBottle, GiForkKnifeSpoon, GiPineTree, GiCrown } from 'react-icons/gi'
import { FaHeadphones } from 'react-icons/fa'

import styles from './Functions.module.scss'
import { client } from '../../utils/client'
import { functionsQuery } from '../../utils/queries'
import banner from '../../public/005.png'

import PageBanner from '../../components/PageBanner/PageBanner'
import ExtraService from '../../components/ExtraService/ExtraService'
import MakeBooking from '../../components/MakeBooking/MakeBooking'
import ImageRow from '../../components/ImageRow/ImageRow'
import { useRouter } from 'next/router'
import { renderPageIcon } from '../../utils/helpers'
import ImagePreview from '../../components/ImagePreview/ImagePreview'

const FunctionsPage = ({ functions }) => {
  const { heading: { main, sub }, text, options, features, services, images } = functions
  const router = useRouter()
  const [activeImage, setActiveImage] = useState()
  const [showPreview, setShowPreview] = useState(false)

  console.log(images)
  
  const handleImageClick = (image) => {
    setActiveImage(image)
    setShowPreview(true)
  }
  
  const renderFeatureIcon = (i) => {
    if(i === 0){
      return (
        <p><BiChair /></p>
      )
    } else if(i === 1){
      return (
        <p><GiBoatFishing /></p>
      )
    } else if(i === 2){
      return (
        <p><GiCampfire /></p>
      )
    } else if(i === 3){
      return (
        <p><GiCampingTent /></p>
      )
    }
  }

  const renderServiceIcon = (type) => {
    if(type.toLowerCase() === 'cleaning'){
      return (
        <p><GiBroom /></p>
      )
    } else if(type.toLowerCase() === 'food catering'){
      return (
        <p><GiForkKnifeSpoon /></p>
      )
    } else if(type.toLowerCase() === 'refreshments'){
      return (
        <p><GiWineBottle /></p>
      )
    } else if(type.toLowerCase() === 'hall decor'){
      return (
        <p><GiCrown /></p>
      )
    } else if(type.toLowerCase() === 'outside wedding'){
      return (
        <p><GiPineTree /></p>
      )
    } else if(type.toLowerCase() === 'dj service'){
      return (
        <p><FaHeadphones /></p>
      )
    } 
  }

  return (
    <div className= {`${styles.container}`}>
      <PageBanner image={banner} />

      <div className='page__margin'>
        <header className= 'heading'>
          {renderPageIcon(router.pathname)}
          <h1>{main}</h1>
          <p>{sub}</p>
        </header>

        <div className= {styles.content}>
          <ImageRow images={images.firstRow} priority handleImageClick = {handleImageClick} />

          <div className= {styles.text}>
            <p>{text}</p>
          </div> 

          <MakeBooking />
  
          <section className= {styles.section}>
            <div className= {styles.subHeading}>
              <h2>Duration</h2>
            </div>

            <div className= {styles.options}>
              {options.map((option, i) => (
                <div className= {styles.option} key = {i}> 
                  <h3>{option.name}</h3>
                  <h4>R{option.price}</h4>
                  <p>{option.description}</p>
                </div>
              ))}
            </div>

            <div className= {styles.features}>
              <h4>Both of these packages include</h4>
              
              <div>
                {features.map((feature, i)=> (
                  <div className= {styles.feature} key = {i}>
                    {renderFeatureIcon(i)}
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <ImageRow images = {images.secondRow} handleImageClick = {handleImageClick} />

          <section className= {styles.services}>
            <div className= {styles.subHeading}>
              <h2>Extra Services</h2>
            </div>
            
            <Grid container spacing = {2}>
              {services.map((service, i) => (
                <Grid item md = {6} justifyContent = 'center' key = {i} >
                  <ExtraService service = {service} icon = {renderServiceIcon}/>
                </Grid>
              ))}
            </Grid>
          </section>
          
          <MakeBooking />

          <ImageRow images = {images.thirdRow} handleImageClick = {handleImageClick} />
        </div>

      </div>
      {showPreview && (
        <ImagePreview activeImage={activeImage} showPreview = {showPreview} setShowPreview = {setShowPreview} />
      )}
    </div>
  )
}

export const getStaticProps = async () => {
  const functionsData = await client.fetch(functionsQuery())

  return {
    props: {
      functions: functionsData[0]
    }
  }
}

export default FunctionsPage