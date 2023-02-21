import React from "react";

import styles from './ExtraService.module.scss'

const ExtraService = ({ service, icon }) => {
  const { name, price, type, description } = service

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default ExtraService;
