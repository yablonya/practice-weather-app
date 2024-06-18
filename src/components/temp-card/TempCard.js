import React from 'react';
import styles from './TempCard.module.scss'

const TempCard = ({day, hour, temp, weather}) => {
  return (
    <div className={styles.card}>
      <h5>{day ? day : hour}</h5>
      <div>{temp}&deg;</div>
      <p>{weather}</p>
    </div>
  );
};

export default TempCard;