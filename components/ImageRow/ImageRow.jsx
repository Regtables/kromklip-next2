import React from 'react'
import { Grid } from '@mui/material'

import styles from './ImageRow.module.scss'

import ImageTile from '../ImageTile/ImageTile'

const ImageRow = ({ images }) => {
  console.log(images)  
  return (
    <div className= {styles.container}>
        <Grid container spacing={1}>
            {images?.map((image, i) => (
                <Grid item md = {3} key = {i}>
                    <div className= {styles.image}>
                        <ImageTile image = {{image: image}} alt = 'function' />
                    </div>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default ImageRow