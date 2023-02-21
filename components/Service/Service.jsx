import Link from 'next/link'
import React from 'react'

import styles from './Service.module.scss'

const Service = ({ service, icon, slug, button }) => {
  const { title, text } = service

  return (
    <div className= {styles.container}>
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
  )
}

export default Service