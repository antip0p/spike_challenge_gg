const EARTH_RADIUS = 6371;

export function calculateDistance(coord0, coord1) {
  const [lat0, lon0] = toRadArray(coord0);
  const [lat1, lon1] = toRadArray(coord1);
  const deltaLat = lat1 - lat0;
  const deltaLon = lon1 - lon0;

  const a = Math.sin(deltaLat/2)**2 + (Math.sin(deltaLon/2)**2) * Math.cos(lat0) * Math.cos(lat1);
  return (2 * EARTH_RADIUS * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))).toFixed(1);
}

const toRadArray = (degreesArray) => degreesArray.map((deg) => deg * Math.PI / 180);
