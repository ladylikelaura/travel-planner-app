async function getWeather(locationData, duration, weatherBitKey) {
  const location = locationData.geonames[0];
  const { lat, lng } = location;

  if (duration <= 16) {
    const res = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&units=I&key=${weatherBitKey}`
    );
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(
      `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&units=I&key=${weatherBitKey}`
    );
    const data = await res.json();
    return data;
  }
}

export { getWeather };
