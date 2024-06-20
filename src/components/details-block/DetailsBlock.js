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
  const forecastObject = useForecastContext();

  return (
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
            <div>{forecastObject ? forecastObject.currentWeather.temp : '--'}&deg;</div>
            <div>
              <div>
                <Image src="/images/windy.png" alt="Wind" width={20} height={20}/>
                {forecastObject ? forecastObject.currentWeather.windSpeed : '--'} mph
              </div>
              <div>
                <Image src="/images/drop.png" alt="Drop" width={20} height={20}/>
                {forecastObject ? forecastObject.currentWeather.relativeHum : '--'}%
              </div>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            Feels like {forecastObject ? forecastObject.currentWeather.apparentTemp : '--'}&deg;
          </div>
          <div className={styles.additionalInfo}>
            {forecastObject ? getWeatherByCode(forecastObject.currentWeather.weather) : '--'}
          </div>
        </div>
      </div>

      <div className={styles.hourlyForecast}>
        <h3>Hourly Forecast</h3>
        {forecastObject.weekHourly[0] && forecastObject.weekHourly[0].temp.slice(hours, 23).map((num, index) => (
          <TempCard
            key={index}
            variant='hour'
            hour={hours + index + 1}
            temp={num}
            weatherCode={forecastObject.weekHourly[0].weather[hours + index - 1]}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsBlock;