"use client";

import React from 'react';
import styles from "./MainBlock.module.scss";
import Image from "next/image";
import TempCard from "@/components/temp-card/TempCard";
import {dateTimeFormatting} from "@/utils";
import useDateTime from "@/utils/useDateTime";

const MainBlock = () => {
  const {day, month, year} = useDateTime();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <form action="#">
          <input type="search" placeholder="Enter the location" required/>
          <button type="submit">
            <Image src="/images/search.png" alt="Search" width={20} height={20}/>
          </button>
        </form>
        <p>
          {dateTimeFormatting(day)}.{dateTimeFormatting(month)}.{year}
        </p>
      </div>

      <div className={styles.generalInfo}>
        <div className={styles.leftBlock}>
          <h1>20&deg;</h1>
          <h2>Cloudy</h2>
        </div>
        <div className={styles.rightBlock}>
          <div>
            <Image src="/images/windy.png" alt="Wind" width={40} height={40}/>
            mph
          </div>
          <div>
            <Image src="/images/drop.png" alt="Drop" width={40} height={40}/>
            90%
          </div>
        </div>
      </div>

      <div className={styles.weeklyForecast}>
        <TempCard day={'Today'} temp={20} weather={'Sunny'}/>
        <TempCard day={'Today'} temp={20} weather={'Sunny'}/>
        <TempCard day={'Today'} temp={20} weather={'Sunny'}/>
        <TempCard day={'Today'} temp={20} weather={'Sunny'}/>
        <TempCard day={'Today'} temp={20} weather={'Sunny'}/>
        <TempCard day={'Today'} temp={20} weather={'Sunny'}/>
      </div>

    </div>
  );
};

export default MainBlock;