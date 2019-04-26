const weather = (key, latitude, longitude) => {
  return fetch(
    `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`
  )
  .then (response => response.json())
}

