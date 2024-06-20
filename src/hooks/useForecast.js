import {useEffect, useState} from 'react';
import getForecast from "@/libs/api";
import {forecastDataFormatting} from "@/libs/utils";

const useForecast = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const data = await getForecast(latitude, longitude);
          console.log(data)
          setForecastData(data);
        },
        (error) => {
          console.error('Error obtaining location:', error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return forecastDataFormatting(forecastData);
};

export default useForecast;