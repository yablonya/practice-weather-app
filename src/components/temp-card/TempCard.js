import React from 'react';
import styles from './TempCard.module.scss'
import {getWeatherByCode} from "@/libs/utils";

const TempCard = ({variant, day, hour, temp, weatherCode, ...rest}) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className={styles.card} {...rest}>
      {variant === 'day' ?
        <h5>{day ? days[day % 7] : '-'}</h5> :
        <h5>{hour ? `${hour}:00` : '-'}</h5>
      }
      <div>{temp ? Math.round(temp) : '--'}&deg;</div>
      <p>{weatherCode || (weatherCode === 0) ? getWeatherByCode(weatherCode) : '-'}</p>
    </div>
  );
};

export default TempCard;