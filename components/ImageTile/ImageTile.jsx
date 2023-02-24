import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { fetchDataUrl } from '../../api/index'

import styles from './ImageTile.module.scss'
import { client } from '../../utils/client'

const ImageTile = ({ image, alt, priority, borderRadius }) => {
  const { image: url, base64 } = image
  const imageProps = useNextSanityImage(client, url)
  const  { src, loader } = imageProps
  
  return (
    <div className= {styles.container} style = {{borderRadius: borderRadius}}>
      <Image 
        src = {src}
        loader = {loader}
        fill
        alt = {alt}
        placeholder = {base64 ? 'blur' : 'empty'}
        blurDataURL = {base64 && base64}
        priority = {priority}
      />
    </div>
  )
}

export default ImageTile