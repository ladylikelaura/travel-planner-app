function getTripLength(arrival, departure) {
  const timeDiff = Math.abs(arrival.getTime() - departure.getTime());

  // Convert the time difference from milliseconds to days
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
}

export { getTripLength };
