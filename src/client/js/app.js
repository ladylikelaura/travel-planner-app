import { getImage } from "./getImage";
import { getTripLength } from "./getTripLength";
import { getLocation } from "./getLocation";
import { getWeather } from "./getWeather";
import { updateUI } from "./updateUI";
import { locationInput, arrivalTime, departureTime } from "./dom-elements";

/* Api keys */
const geonamesKey = process.env.GEONAMES_USERNAME;
const pixabayKey = process.env.PIXABAY_KEY;
const weatherBitKey = process.env.WEATHERBIT_KEY;

export async function handleSubmit() {
  try {
    const location = locationInput.value;

    if (!location) {
      alert("Please enter a valid location");
      return;
    }

    if (!(arrivalTime.value && departureTime.value)) {
      alert("Please enter a valid time");
      return;
    }

    const arrival = new Date(arrivalTime.value);
    const departure = new Date(departureTime.value);

    if (arrival > departure) {
      alert("Please enter a valid arrival and departure date");
      return;
    }

    // Calculate the time difference in milliseconds
    const daysDiff = getTripLength(arrival, departure);

    const locationData = await getLocation(location, geonamesKey);
    const imageData = await getImage(locationData, location, pixabayKey);
    const weatherData = await getWeather(locationData, daysDiff, weatherBitKey);
    updateUI(locationData, weatherData, imageData);
  } catch (error) {
    console.log(error);
    alert("An error occured ");
  }
}
