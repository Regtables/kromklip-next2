import React from 'react'

import styles from './ContactNow.module.scss'

const ContactNow = ({ text }) => {
	return (
		<div className={styles.container}>
      <div className= {styles.button}>
			  <button>{ text }</button>
      </div>
		</div>
	);
};

export default ContactNow;
