import React from 'react'
import { Grid } from '@mui/material'

import styles from './Amenities.module.scss'
import { renderAmenityLogo } from '../../utils/helpers'

import Amenity from '../Amenity/Amenity'

const Amenities = ({ amenities }) => {
  return (
    <div className= {styles.container}>
      <Grid container spacing={1} justifyContent = 'start'>
        {amenities?.map((amenity, i) => (
        <Grid item md = {3} key = {i}>
            <Amenity amenity={amenity} renderIcon = {renderAmenityLogo} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Amenities