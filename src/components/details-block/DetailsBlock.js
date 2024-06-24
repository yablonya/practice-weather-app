'use client';

import React from 'react';
import styles from './DetailsBlock.module.scss'
import Image from "next/image";
import TempCard from "@/components/temp-card/TempCard";
import {dateTimeFormatting, getWeatherByCode} from "@/libs/utils";
import useDateTime from "@/hooks/useDateTime";
import {useForecastContext} from "@/hooks/ForecastContext";

const DetailsBlock = () => {
  const { hours, minutes } = useDateTime();
  const { forecastObject, selectedDay } = useForecastContext();
  const currWeather = forecastObject.currentWeather;

  const renderHourlyForecast = () => {
    if (!forecastObject.weekHourly[selectedDay]) return null;

    const startHour = selectedDay === 0 ? hours : 0;
    const endHour = 23;

    return forecastObject.weekHourly[selectedDay].temp.slice(startHour, endHour + 1).map((temp, index) => (
      <TempCard
        key={index}
        variant='hour'
        hour={startHour + index}
        temp={temp}
        weatherCode={forecastObject.weekHourly[selectedDay].weather[startHour + index]}
      />
    ));
  };

  return (
    forecastObject.weekHourly.length !== 0 &&
    <div className={styles.container}>
      <div className={styles.details}>
        <div>
          <h2>
            Good
            {
              hours < 5 ? ' Night' :
                hours < 12 ? ' Morning' :
                  hours < 18 ? ' Afternoon' : ' Evening'
            }
          </h2>
          <h2>
            {dateTimeFormatting(hours)}:{dateTimeFormatting(minutes)}
          </h2>
        </div>

        <div>
          <div className={styles.currentWeather}>
            <div>{currWeather.temp}&deg;</div>
            <div>
              <div>
                <Image src="/images/windy.png" alt="Wind" width={20} height={20}/>
                {currWeather.windSpeed} mph
              </div>
              <div>
                <Image src="/images/drop.png" alt="Drop" width={20} height={20}/>
                {currWeather.relativeHum}%
              </div>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            Feels like {currWeather.apparentTemp}&deg;
          </div>
          <div className={styles.additionalInfo}>
            {getWeatherByCode(currWeather.weather)}
          </div>
        </div>
      </div>

      <div className={styles.hourlyForecast}>
        <h3>Hourly Forecast</h3>
        <div>
          {renderHourlyForecast()}
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;