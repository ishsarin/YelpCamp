
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 7 // starting zoom
});

      
    map.addControl(new mapboxgl.NavigationControl());
    const marker = new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offest: 25 })
            .setHTMl(
                `<h3>${campground.title}</h3>`
            )
    )
    .addTo(map);
    