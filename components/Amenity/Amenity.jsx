import React from 'react'
import { GiForkKnifeSpoon, GiCampfire, GiBunkBeds } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { MdPower } from 'react-icons/md'
import { BiBed, BiBlanket } from 'react-icons/bi'
import { FaToilet } from 'react-icons/fa'

import styles from './Amenity.module.scss'

const Amenity = ({ amenity }) => {

  const renderAmenity = (item) => {
    const amenity = item.amenity
    const value = item.value
    if(amenity === 'self-catering'){
      return (
        <>
          <p><GiForkKnifeSpoon /></p>
          <h6>{amenity}</h6>
        </>
      )
    } else if (amenity === 'braai'){
      return (
        <>
          <p><GiCampfire /></p>
          <h6>{amenity}</h6>
        </>
      )
    } else if (amenity === 'parking'){
      return (
        <>
          <p><AiFillCar /></p>
          <h6>{value} parking</h6>
        </>
      )
    } else if (amenity === 'power'){
      return (
        <>
          <p><MdPower /></p>
          <h6>power</h6>
        </>
      )
    } else if (amenity === 'double bed'){
      return (
        <>
          <p><BiBed /></p>
          <h6>double bed</h6>
        </>
      )
    } else if (amenity === 'bunk bed'){
      return (
        <>
          <p><GiBunkBeds /></p>
          <h6>bunk beds</h6>
        </>
      )
    } else if (amenity === 'bathrooms'){
      return (
        <>
          <p><FaToilet /></p>
          <h6>{value} bathrooms</h6>
        </>
      )
    } else if (amenity === 'linen'){
      return (
        <>
          <p><BiBlanket /></p>
          <h6>linen {value}</h6>
        </>
      )
    } 
    
  }
  return (
    <div className= {styles.container}>
      {renderAmenity(amenity)}
    </div>
  )
}

export default Amenity