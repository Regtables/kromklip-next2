import React from 'react'

import styles from './BasicButton.module.scss'

const BasicButton = ({ text, justify }) => {
  return (
    <div className= {styles.container} style = {{justifyContent: justify}}>
      <button>
        {text}
      </button>
    </div>
  )
}

export default BasicButton