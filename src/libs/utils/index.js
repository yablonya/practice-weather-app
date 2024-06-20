import useDateTime from "@/hooks/useDateTime";

export function dateTimeFormatting(num) {
  return num > 10 ? num : `0${num}`;
}

export function forecastDataFormatting(forecastData) {
  const { timezoneOffset } = useDateTime();
  const daysNum = 5;
  const forecastObject = {
    currentWeather: {},
    weekHourly: []
  }

  if (forecastData) {
    forecastObject.currentWeather = {
      apparentTemp: Math.round(forecastData.current.apparent_temperature),
      relativeHum: forecastData.current.relative_humidity_2m,
      temp: Math.round(forecastData.current.temperature_2m),
      weather: forecastData.current.weather_code,
      windSpeed: forecastData.current.wind_speed_10m,
      time: +forecastData.current.time.split('T')[1].split(':')[0] + timezoneOffset,
    }

    for (let i = 0; i < daysNum; i++) {
      forecastObject.weekHourly.push({
        temp: forecastData.hourly.temperature_2m.slice(i * 24, (i + 1) * 24),
        weather: forecastData.hourly.weather_code.slice(i * 24, (i + 1) * 24),
      })
    }
  }

  return forecastObject;
}

export function getWeatherByCode (code) {
  const weatherArr = {
    0: 'Sunny',
    1: 'Mainly clear',
    2: 'Cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Freezing drizzle',
    57: 'Freezing drizzle',
    61: 'Light rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Freezing rain',
    67: 'Freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Rain shower',
    81: 'Rain shower',
    82: 'Rain shower',
    85: 'Snow shower',
    86: 'Snow shower',
    95: 'Thunderstorm',
    96: 'Slight hail',
    99: 'Heavy hail'
  };

  return weatherArr[code]
}