import React from 'react'

import styles from './AdditionalInfo.module.scss'

const AdditionalInfo = ({ info }) => {
  return (
    <div className= {styles.container}>
      <div className= {styles.heading}>
        <h5>Additional Info</h5>
      </div>
      <div className= {styles.info}>
        <p>-times</p>
        <p>-contact</p>
        <p>-rules</p>
      </div>
    </div>
  )
}

export default AdditionalInfo