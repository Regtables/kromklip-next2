import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import styles from './Service.module.scss'
import { client } from '../../utils/client'

const Service = ({ service, icon, slug, button, image }) => {
  const { title, text } = service
  // const { src, loader } = useNextSanityImage(client, image)

  return (
    <div className= {styles.container}>
      <div className= {styles.image}>
        <Image 
          src = {image}
          fill
        />
      </div>
      <div className= {styles.overlay} />

      <div className= {styles.content}>
        <div className= {styles.icon}>
          <p>{icon}</p>
        </div>

        <header className= {styles.title}>
          <h3>{title}</h3>
        </header>

        <div className= {styles.text}>
          {text.map((para, i) => (
            // <></>
            <p key = {i}>{para.children[0].text}</p>
          ))}
        </div>
        
        <Link href = {`${slug}`}>
          <button className= {styles.button} role = 'button'>
            <p>{button}</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Service