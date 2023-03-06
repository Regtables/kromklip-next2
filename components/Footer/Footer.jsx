import React from 'react'

import styles from './Footer.module.scss'

import { LINKS } from '../../utils/contants'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  return (
    <div className= {styles.container} style = {router.pathname === '/contact' ? {paddingTop: '4rem'} : {marginTop: '4rem'}}>
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