import React from 'react'
import { GiSittingDog } from 'react-icons/gi'
import { FaCat } from 'react-icons/fa'

import styles from './Pets.module.scss'

const Pets = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.icon}>
        <p>{<GiSittingDog />}</p>
      </div>
      
      <div className= {styles.text}>
        <h5>We are very pet friendly</h5>
      </div>

      <div className= {styles.icon}>
        <p style = {{transform: 'rotateY(180deg)'}}>{<FaCat />}</p>
      </div>
    </div>
  )
}

export default Pets