import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { fetchDataUrl } from '../../api/index'

import styles from './ImageTile.module.scss'
import { client } from '../../utils/client'

const ImageTile = ({ image, alt }) => {
  const { image: url, base64 } = image
  const imageProps = useNextSanityImage(client, url)
  const  { src, loader } = imageProps
  
  return (
    <div className= {styles.container}>
      <Image 
        src = {src}
        loader = {loader}
        fill
        alt = {alt}
        placeholder ='blur'
        blurDataURL = {base64}
      />
    </div>
  )
}

export default ImageTile