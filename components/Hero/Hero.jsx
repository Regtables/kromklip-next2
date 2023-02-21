import React from 'react'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className= {styles.container}>
      <video src = '/landing-video.mp4' autoPlay muted loop>
  
      </video>
    </div>
  )
}

export default Hero