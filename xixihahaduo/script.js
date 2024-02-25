// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoieXZvbm5lMTIwOSIsImEiOiJjbHJnZW02bXcwZDNuMmtvNTlpa21rczg0In0.3ICxqW2GCrgUkxAFM38aEA";
const primary = "mapbox://styles/yvonne1209/clsxtnewv00c501qw3bwphvi2";
const secondary = "mapbox://styles/yvonne1209/clsxuxq6500bf01qogkka9bsp";
const special = "mapbox://styles/yvonne1209/clsxya42m00cz01qz3irgcec6";
// Define a map object by initialising a Map from Mapbox
const map = new mapboxgl.Map({
  container: "map",
  // Replace YOUR_STYLE_URL with your style URL.
  style: primary,
  center: [-4.2571, 56.0438],
  zoom: 7
});
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

//On click the radio button, toggle the style of the map.
for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "primary") {
      map.setStyle(primary);
    }
    if (layer.target.id == "secondary") {
      map.setStyle(secondary);
    }
    if (layer.target.id == "special") {
      map.setStyle(special);
    }
  };
}
/*
Add an event listener that runs
when a user clicks on the map element.
*/
map.on("click", (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["primary"] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];
  /*
Create a popup, specify its options
and properties, and add it to the map.
*/
  const popup = new mapboxgl.Popup({ offset: [0, -15], className: "popupbox" })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h2>${feature.properties.SchoolName}</h2><p>LAName: ${feature.properties.LAName}</p>
<p>PostCode: ${feature.properties.PostCode}</p>
<p>Email: ${feature.properties.Email}</p>
<p>PhoneNumber: ${feature.properties.PhoneNumber}</p>`
    )
    .addTo(map);
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 15
  });
});
map.on("click", (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["secondary"] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];
  /*
Create a popup, specify its options
and properties, and add it to the map.
*/
  const popup = new mapboxgl.Popup({ offset: [0, -15], className: "popupbox" })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h2>${feature.properties.SchoolName}</h2><p>LAName: ${feature.properties.LAName}</p>
<p>PostCode: ${feature.properties.PostCode}</p>
<p>Email: ${feature.properties.Email}</p>
<p>PhoneNumber: ${feature.properties.PhoneNumber}</p>`
    )
    .addTo(map);
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 15
  });
});
map.on("click", (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["special2"] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];
  /*
Create a popup, specify its options
and properties, and add it to the map.
*/
  const popup = new mapboxgl.Popup({ offset: [0, -15], className: "popupbox" })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h2>${feature.properties.SchoolName}</h2><p>LAName: ${feature.properties.LAName}</p>
<p>PostCode: ${feature.properties.PostCode}</p>
<p>Email: ${feature.properties.Email}</p>
<p>PhoneNumber: ${feature.properties.PhoneNumber}</p>`
    )
    .addTo(map);
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 15
  });
});
const geocoder = new MapboxGeocoder({
  // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  marker: false,
  placeholder: "Search for places in Glasgow", // Placeholder text for the search bar
  proximity: {
    longitude: 55.8642,
    latitude: 4.2518
  } // Coordinates of Glasgow center
});

map.addControl(geocoder, "top-right");
map.addControl(new mapboxgl.NavigationControl(), "top-right");
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
  }),
  "top-right"
);