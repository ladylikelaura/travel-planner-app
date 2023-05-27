async function getLocation(location, geonamesKey) {
  if (!location) return;

  const url = `https://secure.geonames.org/searchJSON?q=${encodeURIComponent(
    location
  )}&maxRows=10&username=${geonamesKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export { getLocation };
