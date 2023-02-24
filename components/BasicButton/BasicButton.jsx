import React from 'react'

import styles from './BasicButton.module.scss'

const BasicButton = ({ text }) => {
  return (
    <div className= {styles.container}>
      <button>
        {text}
      </button>
    </div>
  )
}

export default BasicButton