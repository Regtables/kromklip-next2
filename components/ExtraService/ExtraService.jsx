import React from "react";
import { motion } from 'framer-motion'

import styles from './ExtraService.module.scss'

const ExtraService = ({ service, icon }) => {
  const { name, price, type, description } = service

  return (
    <motion.div className={styles.container}  whileHover = {{scale: 1.03}} transition = {{duration: 0.3}}>
      <div className= {styles.title}>
        <h3>{name}</h3>
        {icon(type)}
        <h4>{price}</h4>
      </div>

      <div className= {styles.type}>
        <p>{type}</p>
      </div>

      <div className= {styles.description}>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ExtraService;
