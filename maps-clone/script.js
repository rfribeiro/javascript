mapboxgl.accessToken = 'pk.eyJ1IjoicmZyaWJlaXJvIiwiYSI6ImNrZzgzNjM0OTBkZDEycm10eXgyMDltOWMifQ.f6ktaYPQ2ZKTRLyOTt2ePQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-23.55052, -46.633309])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    map.addControl(directions, 'top-left')
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
}



