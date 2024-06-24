import React from 'react';
import styles from './TempCard.module.scss'
import {getWeatherByCode} from "@/libs/utils";
import {useForecastContext} from "@/hooks/ForecastContext";

const TempCard = ({ variant, dayNum, hour, temp, weatherCode, index, ...rest }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const temperature = Math.round(temp);
  const weather = getWeatherByCode(weatherCode);
  const { selectedDay, setSelectedDay } = useForecastContext();

  const handleClick = () => {
    setSelectedDay(index)
  }

  return (
    variant === 'day' ?
      <div
        className={styles.dayCard}
        style={{borderColor: selectedDay === index ? '#d1d1d1' : '#f4f4f4'}}
        {...rest}
        onClick={handleClick}
      >
        <h5>{days[dayNum % 7]}</h5>
        <div>{temperature}&deg;</div>
        <p title={weather}>{weather}</p>
      </div>
      :
      <div className={styles.card} {...rest}>
        <h5>{hour}:00</h5>
        <div>{temperature}&deg;</div>
        <p title={weather}>{weather}</p>
      </div>
  );
};

export default TempCard;