import React from 'react'
import { Grid } from '@mui/material'
import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from './AccommodationCard.module.scss'
import { urlFor } from '../../utils/client'

import ImageTile from '../ImageTile/ImageTile'
import BasicButton from '../BasicButton/BasicButton'
import Amenity from '../Amenity/Amenity'

const AccommodationCard = ({ accommodation, renderIcon, handleImageClick }) => {
  const { type, image, description, variations, amenities, slug } = accommodation
  console.log(accommodation)
  return (
    <motion.div className= {styles.container} whileHover = {{scale: 1.03}} transition = {{duration: 0.3}}>
      <div className= {styles.heading}>
        <h2>{type}</h2>
      </div>

      <div className= {styles.image} onClick = {handleImageClick}>
        <ImageTile image={{image: image }} priority />
      </div>

      <div className= {styles.description}>
        <p>{description}</p>
      </div>

      <div className= {styles.types}>
        <h3>Options include: </h3>
        {variations.map((variation, i) => (
          <h4 key = {i}>-{variation.name}</h4>
        ))}
      </div>

      {/* <div className= {styles.amenities}>
        <Grid container>
          {Object.values(amenities).map((amenity, i) => (
            <Grid item md = {3} key = {i}>
              <Amenity amenity={amenity} renderIcon = {renderIcon} />
            </Grid>
          ))}
        </Grid>
      </div> */}
      <Link href = {`/accommodation/${slug.current}`}>
        <BasicButton text = 'read more' justify={'center'} />
      </Link>
    </motion.div>
  )
}

export default AccommodationCard