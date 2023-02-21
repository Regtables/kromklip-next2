import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Navbar.module.scss'
import { LINKS } from '../../utils/contants'

import LogoBanner from '../LogoBanner/LogoBanner'
import Image from 'next/image'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className= {styles.container}>
      {/* {router.pathname === '/' && (
        <div className= {styles.logo}>
          <LogoBanner />
        </div>
      )} */}
      <div className= {styles.links}>
        <div style = {{marginBottom: '10px'}}>
          <Image 
            src = '/logopng.png'
            height= {64}
            width = {206}
          />
        </div>
        
        {LINKS.map((link, i) => (
          <Link href = {`${link.slug}`} key = {i}>
            <div className= {`${styles.link} ${link.slug === 'contact' ? styles.contact : ''}`}>
              <p>{link.icon}</p>
              <h3>{link.link}</h3>
            </div> 
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar