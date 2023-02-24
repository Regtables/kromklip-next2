import React from 'react'

import styles from './Amenity.module.scss'

const Amenity = ({ amenity, renderIcon }) => {
  console.log(amenity)
  return (
    <div className= {styles.container} >
      <div className= {styles.icon}>
        {renderIcon(amenity?.amenity)}
      </div>
      <div className= {styles.amenity}>
        <p>{Object.keys(amenity)}</p>
      </div>
    </div>
  )
}

export default Amenity