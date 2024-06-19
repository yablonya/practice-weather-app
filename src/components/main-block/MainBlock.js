"use client";

import React, {useState} from 'react';
import styles from "./MainBlock.module.scss";
import Image from "next/image";
import TempCard from "@/components/temp-card/TempCard";
import {dateTimeFormatting} from "@/utils";
import useDateTime from "@/utils/useDateTime";

const MainBlock = () => {
  const {day, month, year} = useDateTime();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          {dateTimeFormatting(day)}.{dateTimeFormatting(month)}.{year}
        </p>
      </div>

      <div className={styles.generalInfo}>
        <div className={styles.leftBlock}>
          20&deg;
        </div>
        <div className={styles.rightBlock}>
          <div>
            <img className={styles.windIcon} src="/images/windy.png" alt="Wind"/>
            mph
          </div>
          <div>
            <img className={styles.humidityIcon} src="/images/drop.png" alt="Drop"/>
            90%
          </div>
        </div>
        <h2>Cloudy</h2>
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