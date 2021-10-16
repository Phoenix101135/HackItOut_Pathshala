import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoidGFydW4tMTgwMSIsImEiOiJja3FpdzZzdXcwMWNuMnFwaGZucHZqMmxwIn0.YSYoTUJkW6ppiRO16-RxIA';


navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy : true})

let pos = [];
function successLocation(position)
{
     console.log(position);
       pos.push(position.coords.longitude);
       pos.push(position.coords.latitude) ;
}
function errorLocation(e)
{
     console.log(e);
}


export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: pos,
      zoom: zoom
    });
  });

//   const marker = new mapboxgl.Marker({
//     color: "#FFFFFF",
//     draggable: true
//     }).setLngLat([30.5, 50.5])
//     .addTo(map);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
     
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
