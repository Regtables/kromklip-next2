import React from 'react'
import { Button, Grid } from '@mui/material'

import styles from './AccommodationVariant.module.scss'
import { renderAmenity } from '../../utils/helpers'

import ImageTile from '../ImageTile/ImageTile'
import Amenities from '../Amenities/Amenities'
import BasicButton from '../BasicButton/BasicButton'

const AccommodationVariant = ({ variant }) => {
  console.log(variant)
  const { name, description, images, amenities, highlights, price, accommodates } = variant

  return (
    <div className= {styles.container}>
      <div className= {styles.info}>
        <div className= {styles.heading}>
          <h2>{name}</h2>
          <p>Accommodates {accommodates}</p>
        </div>

        <div className= {styles.description}>
          {description.map((para, i) => (
            <p key = {i}>{para.children[0].text}</p>
          ))}
        </div>

        <div className= {styles.amenities}>
          <Amenities amenities={amenities} />
        </div>

        {/* <div className= {styles.highlights}>
          <h5>Highlights include</h5>
          {highlights?.highlights.map((hl, i) => (
            <p key = {i}>-{hl}</p>
          ))}
        </div> */}

        <div className= {styles.prices}>
          <h5>Approx <span>R{price}</span> per night</h5>
          <p>view prices</p>
        </div>

        <div className= {styles.contact}>
          <BasicButton text= 'Enquire about availality' justify= 'flex-start'/>
        </div>

      </div>
      
      <div className= {styles.gallery}>
        <Grid container spacing = {1} height = '100%'>
          {images?.map((image, i) => (
            <Grid item md = {3} key = {i} height = '100%'>
              <div className= {styles.image}>
                <ImageTile image = {{image: image}} alt = {name} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default AccommodationVariant