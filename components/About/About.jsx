import React from 'react'
import { GiCampfire, GiPartyFlags } from 'react-icons/gi'

import styles from './About.module.scss'

import Service from '../Service/Service'

const About = ({ about }) => {
  const { functions, accomodation, summarry, title } = about
  return (
    <div className= {styles.container}>
      <header className= {styles.heading}>
        <h2>{title}</h2>
      </header>

      <div className= {styles.summarry}>
        {summarry.map((para, i) => (
          <p key= {i}>{para.children[0].text}</p>
        ))}
      </div>

      <div className= {styles.services}>
        <div className= {styles.service}>
          <Service 
            service={accomodation}
            button = 'view our accomodation'
            slug = '/accommodation' 
            icon = {<GiCampfire />}   
          />
        </div>

        <div className= {styles.service}>
          <Service 
            service={functions}
            button = 'read more about functions'
            slug = '/functions'
            icon = {<GiPartyFlags />}
          />
        </div>
      </div>
    </div>
  )
}

export default About