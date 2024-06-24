'use client';

import {createContext, useContext, useState} from "react";
import useForecast from "@/hooks/useForecast";
import useDateTime from "@/hooks/useDateTime";

const ForecastContext = createContext(null);

export const ForecastContextProvider = ({ children }) => {
  const forecastObject = useForecast();
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <ForecastContext.Provider value={{ forecastObject, selectedDay, setSelectedDay }}>
      {children}
    </ForecastContext.Provider>
  );
};

export const useForecastContext = () => useContext(ForecastContext);