export function buildMapsSearchUrl(locationName) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationName)}`;
}

export function buildDriveUrl(origin, destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

export function itemMatch(item, f) {
  return (item.title + item.desc).toLowerCase().includes(f);
}

export function typeIcon(t) {
  return { spot: '📍', meal: '🍽️', transport: '🚃', hotel: '🏨', drive: '🚗' }[t] || '📌';
}
