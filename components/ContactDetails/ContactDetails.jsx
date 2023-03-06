import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail, MdLocationPin } from 'react-icons/md'

import styles from './ContactDetails.module.scss'

const ContactDetails = ({ contact }) => {
  const { phone, email, address } = contact

  return (
    <div className= {styles.container}>
      <div className= {styles.item}>
        <p><BsTelephoneFill /></p>
        <p>{phone}</p>
      </div>

      <div className= {styles.item}>
        <p><MdEmail /></p>
        <p>{email}</p>
      </div>

      <div className= {styles.item}>
        <p><MdLocationPin /></p>
        <p>{address}</p>
      </div>
    </div>
  ) 
}

export default ContactDetails