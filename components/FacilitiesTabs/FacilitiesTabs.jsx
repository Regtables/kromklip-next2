import React from 'react'
import { Button } from '@mui/material'

import styles from './FacilitiesTabs.module.scss'

const FacilitiesTabs = ({ facilities, handleClick, activeSection }) => {
  console.log(facilities)
  return (
    <div className= {styles.container}>
      {facilities.map((facility, i) => (
        <Button 
          key = {i} 
          sx = {{
            padding: 0,
            color: 'var(--color-secondary)',
            borderRadius: '10px',
            transition: 'all 0.5s'
          }}
          onClick = {() => handleClick(facility)}
        >
          <div className= {`${styles.tab} ${facility.facility.name === activeSection?.facility?.name ? styles.active : ''}`}>
            <h3>{facility.facility.name}</h3>
          </div>
        </Button>
      ))}
    </div>
  )
}

export default FacilitiesTabs