import React from 'react'
import Carousel from '../Carousel/Carousel'
import ImageTile from '../ImageTile/ImageTile'

import styles from './Hero.module.scss'

const Hero = ({ images, heading }) => {
  return (
    <div className= {styles.container}>
      <Carousel heading={heading}>
        {images.map((image, i) => (
          <div key = {i} style = {{minWidth: '100%'}}>
            <ImageTile image = {image} alt = 'Kromklip oord' priority handleClick={() => {}} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Hero