async function getImage(locationData, locationFromInput, pixabayKey) {
  const url = `https://pixabay.com/api/?q=${locationFromInput}&key=${pixabayKey}&image_type=photo
    `;
  const response = await fetch(url);
  const data = await response.json();

  if (data.hits.length === 0) {
    const location = locationData.geonames[0];
    const { countryName } = location;
    const url = `https://pixabay.com/api/?q=${countryName}&key=${pixabayKey}&image_type=&category=places
      `;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } else {
    return data;
  }
}

export { getImage };
