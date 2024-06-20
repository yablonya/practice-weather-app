"use client";

import React, {useState} from 'react';
import styles from "./MainBlock.module.scss";
import Image from "next/image";
import TempCard from "@/components/temp-card/TempCard";
import {dateTimeFormatting, getWeatherByCode} from "@/libs/utils";
import useDateTime from "@/hooks/useDateTime";
import {useForecastContext} from "@/hooks/ForecastContext";

const MainBlock = () => {
  const {day, date, month, year} = useDateTime();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const forecastObject = useForecastContext();

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.formBlock}
          style={{top: isModalOpen ? '0' : '-100px'}}
        >
          <form>
            <input type="search" placeholder="Enter the location" required />
            <button type='submit'>
              <Image src="/images/search.png" alt="Search" width={20} height={20}/>
            </button>
          </form>
        </div>
        <div
          className={styles.modalOverlay}
          style={{
            visibility: isModalOpen ? 'visible' : 'hidden',
            opacity: isModalOpen ? '1' : '0'
          }}
          onClick={handleClick}
        ></div>

        <form>
          <input type="search" placeholder="Enter the location" required />
          <button type='submit'>
            <Image src="/images/search.png" alt="Search" width={20} height={20}/>
          </button>
        </form>

        <button onClick={handleClick}>
          <Image src="/images/search.png" alt="Search" width={20} height={20}/>
        </button>
        <p>
          {dateTimeFormatting(date)}.{dateTimeFormatting(month)}.{year}
        </p>
      </div>

      <div className={styles.generalInfo}>
        <div className={styles.leftBlock}>
          {Math.round(forecastObject.currentWeather.temp)}&deg;
        </div>
        <div className={styles.rightBlock}>
          <div>
            <img className={styles.windIcon} src="/images/windy.png" alt="Wind"/>
            {forecastObject.currentWeather.windSpeed} mps
          </div>
          <div>
            <img className={styles.humidityIcon} src="/images/drop.png" alt="Drop"/>
            {forecastObject.currentWeather.relativeHum}%
          </div>
        </div>
        <h2>{getWeatherByCode(forecastObject.currentWeather.weather)}</h2>
      </div>

      <div className={styles.weeklyForecast}>
        <TempCard
          variant='day'
          day={day}
          temp={forecastObject.currentWeather.temp}
          weatherCode={forecastObject.currentWeather.weather}
        />
        {forecastObject.weekHourly.map((weekDay, index) => (
          <TempCard
            key={index}
            variant='day'
            day={day + index + 1}
            temp={weekDay.temp[11]}
            weatherCode={weekDay.weather[11]}
          />
        ))}
      </div>

    </div>
  );
};

export default MainBlock;