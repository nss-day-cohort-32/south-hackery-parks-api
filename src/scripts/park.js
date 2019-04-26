const getParkData = () => {
    fetch(
      "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json"
    )
    .then(response => response.json())
    .then(parkData => {
        parkData.parks.forEach(park => {
            let parkName = park.name;
            let parkState = park.state;
            let parkVisit = park.visited;
            weather(key, park.latitude, park.longitude)
            .then (weatherData => {
                let current = weatherData.currently.summary;
                let today = weatherData.hourly.summary;
                let week = weatherData.daily.summary;
                parkDomBuilder(parkName, parkState, parkVisit, current, today, week)
            });
        })
    })
}
getParkData()