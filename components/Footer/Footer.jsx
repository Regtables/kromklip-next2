import React from 'react'

import styles from './Footer.module.scss'

import { LINKS } from '../../utils/contants'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.links}>
        {LINKS.map((link,i) => (
          <Link href = {`${link.slug}`} key = {i}>
            <div className= {styles.link}>
              <h3>{link.link}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className= {styles.copyright}>
        <p>Copyright © Kromklip Ontspannings Oort</p>
      </div>
    </div>
  )
}

export default Footer