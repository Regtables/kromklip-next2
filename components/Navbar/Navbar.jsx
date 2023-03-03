import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import styles from './Navbar.module.scss'
import { LINKS } from '../../utils/contants'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className= {styles.container}>
      <div className= {styles.links}>
        <Link href={'/'}>
          <div style = {{marginBottom: '10px'}}>
            <Image 
              src = '/logopng.png'
              height= {64}
              width = {206}
            />
          </div>
        </Link>
        
        {LINKS.map((link, i) => (
          <Link href = {`${link.slug}`} key = {i}>
            <div className= {`${styles.link} ${link.slug === '/contact' ? styles.contact : ''}`}>
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