import React from 'react'

import styles from './Highlights.module.scss'

const Highlights = ({ highlights: data }) => {
  const { setup, hightlights } = data
  return (
    <div className= {styles.container}>
      <div className= {styles.heading}>
        <h5>{setup}</h5>
      </div>
      <div className= {styles.highlights}>
        {hightlights.map((highlight, i) => (
          <div className= {styles.highlight} key = {i}>
            <p>{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Highlights