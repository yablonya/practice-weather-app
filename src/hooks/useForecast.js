import {useEffect, useState} from 'react';
import getForecast from "@/libs/api";
import {forecastDataFormatting} from "@/libs/utils";

const useForecast = (lat, lng) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecast = async (latitude, longitude) => {
      try {
        const data = await getForecast(latitude, longitude);
        setForecastData(data);
      } catch (error) {
        console.error('Error obtaining forecast data:', error);
      }
    };

    fetchForecast(lat, lng);
  }, [lat, lng]);

  return forecastDataFormatting(forecastData);
};

export default useForecast;