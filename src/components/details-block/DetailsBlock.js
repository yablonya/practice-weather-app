'use client'
import React from 'react';
import styles from './DetailsBlock.module.scss'
import Image from "next/image";
import TempCard from "@/components/temp-card/TempCard";
import {dateTimeFormatting} from "@/utils";
import useDateTime from "@/utils/useDateTime";

const DetailsBlock = () => {
  const {hours, minutes} = useDateTime();

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2>Good Morning</h2>
        <h2>
          {dateTimeFormatting(hours)}:{dateTimeFormatting(minutes)}
        </h2>
        <div className={styles.currentWeather}>
          <div>20&deg;</div>
          <div>
            <div>
              <Image src="/images/windy.png" alt="Wind" width={20} height={20}/>
              6.3 mph
            </div>
            <div>
              <Image src="/images/drop.png" alt="Drop" width={20} height={20}/>
              90%
            </div>
          </div>
        </div>
        <div className={styles.additionalInfo}>Feels like 19&deg;</div>
        <div className={styles.additionalInfo}>Cloudy</div>
      </div>

      <div className={styles.hourlyForecast}>
        <h3>Hourly Forecast</h3>
        <TempCard hour={'12:00'} temp={20} weather={'Sunny'}/>
        <TempCard hour={'13:00'} temp={20} weather={'Sunny'}/>
        <TempCard hour={'14:00'} temp={20} weather={'Sunny'}/>
        <TempCard hour={'15:00'} temp={20} weather={'Sunny'}/>
        <TempCard hour={'16:00'} temp={20} weather={'Sunny'}/>
        <TempCard hour={'17:00'} temp={20} weather={'Sunny'}/>
      </div>
    </div>
  );
};

export default DetailsBlock;