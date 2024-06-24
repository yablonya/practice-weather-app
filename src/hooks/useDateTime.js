import {useEffect, useState} from "react";

const useDateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return {
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    dayNum: currentDate.getDay(),
    date: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    timezoneOffset: -(currentDate.getTimezoneOffset() / 60)
  }
}

export default useDateTime;