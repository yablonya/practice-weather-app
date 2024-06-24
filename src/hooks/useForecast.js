import {useEffect, useState} from 'react';
import getForecast from "@/libs/api";
import {forecastDataFormatting} from "@/libs/utils";

const useForecast = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecast = async (latitude, longitude) => {
      try {
        const data = await getForecast(latitude, longitude);
        console.log(data);
        setForecastData(data);
      } catch (error) {
        console.error('Error obtaining forecast data:', error);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchForecast(latitude, longitude);
        },
        (error) => {
          console.error('Error obtaining location:', error);
          // Використання запасних координат при помилці з геолокацією
          fetchForecast(50, 30);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Використання запасних координат, якщо геолокація не підтримується
      fetchForecast(50, 30);
    }
  }, []);

  return forecastDataFormatting(forecastData);
};

export default useForecast;