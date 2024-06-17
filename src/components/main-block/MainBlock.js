"use client";

import React, {useEffect, useState} from 'react';
import styles from "./MainBlock.module.scss";
import Image from "next/image";

const MainBlock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <form action="#">
          <input type="search" placeholder="Enter the location" required/>
          <button type="submit">
            <Image src="/images/search.png" alt="Search" width={20} height={20}/>
          </button>
        </form>
        <p>
          {currentDate.getDate()}.{currentDate.getMonth()}.{currentDate.getFullYear()}
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

    </div>
  );
};

export default MainBlock;