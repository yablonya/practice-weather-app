'use client';

import {createContext, useContext, useState} from "react";
import useForecast from "@/hooks/useForecast";
import useDateTime from "@/hooks/useDateTime";

const ForecastContext = createContext(null);

export const ForecastContextProvider = ({ children }) => {
  const [curLocation, setCurLocation] = useState({
    name: 'Kyiv, Ukraine',
    latitude: 50.4503596,
    longitude: 30.5245025,
  });
  const forecastObject = useForecast(curLocation.latitude, curLocation.longitude);
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <ForecastContext.Provider
      value={{
        forecastObject,
        selectedDay,
        setSelectedDay,
        curLocation,
        setCurLocation
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

export const useForecastContext = () => useContext(ForecastContext);