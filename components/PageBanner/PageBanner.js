import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import styles from './PageBanner.module.scss'
import client from '../../utils/client'

const PageBanner = ({ image, alt }) => {
	// const imageProps = useNextSanityImage(client, image)
  return (
    <div className= {styles.container}>
			<Image 
				src = {image}
				fill
				priority
				alt = {alt}
				sizes = "(min-width: 450px) 100vw, 40vh"
			/>
    </div>
  )
}

export default PageBanner