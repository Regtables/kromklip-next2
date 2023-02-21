import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import styles from './ImageTile.module.scss'
import { client } from '../../utils/client'

const ImageTile = ({ image, alt }) => {
  const imageProps = useNextSanityImage(client, image)
  const  { src, loader } = imageProps

  return (
    <div className= {styles.container}>
      <Image 
        src = {src}
        loader = {loader}
        fill
      />
    </div>
  )
}

export default ImageTile