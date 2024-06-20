const getForecast = async (latitude, longitude) => {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&wind_speed_unit=ms`);
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch API:', error);
    return null;
  }
}

export default getForecast;
