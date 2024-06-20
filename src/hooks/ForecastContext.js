'use client';

import {createContext, useContext} from "react";
import useForecast from "@/hooks/useForecast";

const ForecastContext = createContext(null);

export const ForecastContextProvider = ({ children }) => {
  const forecastObject = useForecast();

  return (
    <ForecastContext.Provider value={ forecastObject }>
      {children}
    </ForecastContext.Provider>
  );
};

export const useForecastContext = () => useContext(ForecastContext);