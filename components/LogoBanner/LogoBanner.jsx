import React from 'react'
import Image from 'next/image'

import styles from './LogoBanner.module.scss'

const LogoBanner = () => {
  return (
    <div className= {styles.container}>
      <Image 
        src = '/logo-banner.png'
        fill
        priority
      />
    </div>
  )
}

export default LogoBanner