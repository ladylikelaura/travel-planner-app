import {
  arrivalDate,
  arrivalTime,
  tripLength,
  departureDate,
  temperatureEntry,
  weatherEntry,
  longitude,
  latitude,
  country,
  locationImage,
  resultsEntry,
  departureTime,
} from "./dom-elements";
import { getTripLength } from "./getTripLength";

function updateUI(location, weather, image) {
  resultsEntry.style.setProperty("display", "block");
  const imageSrc = image.hits[0].largeImageURL;
  const { lat, lng, countryName } = location.geonames[0];
  const weatherInfo = `${weather.data[0].weather.description}`;
  const temperatureInfo = `${weather.data[0].temp}°C`;
  const arrival = new Date(arrivalTime.value);
  const departure = new Date(departureTime.value);
  const tripLengthValue = getTripLength(arrival, departure);

  locationImage.setAttribute("src", imageSrc);
  country.innerHTML = countryName;
  latitude.innerHTML = lat;
  longitude.innerHTML = lng;
  weatherEntry.innerHTML = weatherInfo;
  temperatureEntry.innerHTML = temperatureInfo;
  departureDate.innerHTML = departureTime.value;
  arrivalDate.innerHTML = arrivalTime.value;
  tripLength.innerHTML = `${tripLengthValue} days`;
}

export { updateUI };
