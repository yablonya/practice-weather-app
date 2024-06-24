"use client";

import React, {useState} from 'react';
import styles from "./MainBlock.module.scss";
import Image from "next/image";
import TempCard from "@/components/temp-card/TempCard";
import {dateTimeFormatting, getWeatherByCode} from "@/libs/utils";
import useDateTime from "@/hooks/useDateTime";
import {useForecastContext} from "@/hooks/ForecastContext";

const MainBlock = () => {
  const {dayNum, date, month, year} = useDateTime();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { forecastObject } = useForecastContext();
  const currWeather = forecastObject.currentWeather;

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    forecastObject.weekHourly.length === 0 ?
      <div className={styles.loaderContainer}>
        <img className={styles.loading} src='/gifs/loading.svg' alt='Loading'/>
      </div>
      :
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
            {Math.round(currWeather.temp)}&deg;
          </div>
          <div className={styles.rightBlock}>
            <div>
              <img className={styles.windIcon} src="/images/windy.png" alt="Wind"/>
              {currWeather.windSpeed} mps
            </div>
            <div>
              <img className={styles.humidityIcon} src="/images/drop.png" alt="Drop"/>
              {currWeather.relativeHum}%
            </div>
          </div>
          <h2>{getWeatherByCode(currWeather.weather)}</h2>
        </div>

        <div className={styles.weeklyForecast}>
          {forecastObject.weekHourly.map((weekDay, index) => (
            <TempCard
              key={index}
              index={index}
              variant='day'
              dayNum={dayNum + index}
              temp={weekDay.temp[12]}
              weatherCode={weekDay.weather[12]}
            />
          ))}
        </div>
      </div>
  );
};

export default MainBlock;