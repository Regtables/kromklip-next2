import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import styles from './CardSml.module.scss'
import { client } from '../../../utils/client'
import Link from 'next/link'

const CardSml = ({ card }) => {
  const { type, image, slug } = card 
  const {src, loader } = useNextSanityImage(client, image)

  return (
    <div className= {styles.container}>
      <div className= {styles.content}>
        <div className= {styles.overlay} />

        <div className= {styles.type}>
          <h3>{type}</h3>
        </div>
        <div className= {styles.image}>
          <Image 
            src = {src}
            loader = {loader}
            fill
          />
        </div>
      </div>

      <Link href={`/accommodation/${slug.current}`}>
        <div className= {styles.view}>
          <p>view</p>
        </div>
      </Link>
    </div>
  )
}

export default CardSml