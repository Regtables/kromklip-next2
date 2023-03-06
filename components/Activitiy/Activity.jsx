import React from 'react'
import { AiFillPhone, AiFillClockCircle } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

import styles from './Activity.module.scss'

const Activity = ({ activity }) => {
  const { name, info: { contact, address, directions }, type, image } = activity

  return (
    <a href= {`${address.link}`} target = '_blank' rel='noreferrer'>
      <div className= {styles.container}>
        <div className= {styles.heading}>
          <h3>{name}</h3>
        </div>

        <div className= {styles.info}>
          <div className= {styles.phone}>
            <p><AiFillPhone /></p>
            <p>{contact}</p>
          </div>

          <div className = {styles.address}>
            <p><MdLocationOn /></p>
            <p>{address.address}</p>
          </div>

          <div className= {styles.directions}>
            <p><AiFillClockCircle /></p>
            <p>{directions}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Activity