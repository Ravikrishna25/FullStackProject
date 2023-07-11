
import React, { useState, useEffect ,createContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Card } from "antd"



const customIcon = L.icon({
  iconUrl: './location.png', // Specify the URL of the icon image
  iconSize: [50, 50], // Set the size of the icon (width, height)
  iconAnchor: [16, 32], // Set the anchor point of the icon (x, y) relative to its size
});

function Map(props) {
  // const [markerPosition, setMarkerPosition] = useState({ lat: 11.342423, lng: 77./728165  });

  const [markerPosition, setMarkerPosition] = useState({ lat: props.lat, lng: props.lon });
  // const [markerPosition, setMarkerPosition] = useState({ lat: "", lng: "" });
  
  // console.log(markerPosition.lat);
  const [loc, setLoc] = useState("");
  const [address, setAddress] = useState("");
  
  useEffect(() => {
    const map = L.map('map').setView([markerPosition.lat, markerPosition.lng], 13);
    // const map = L.map('map').setView([11.342423, 77.728165], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    }).addTo(map);

    const marker = L.marker([markerPosition.lat, markerPosition.lng], {

      draggable: true,
      icon: customIcon,
    }).addTo(map);

    marker.on('dragend', async (e) => {
      const newMarkerPosition = e.target.getLatLng();
      setMarkerPosition({ lat: newMarkerPosition.lat, lng: newMarkerPosition.lng });

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${newMarkerPosition.lat}&lon=${newMarkerPosition.lng}&zoom=18&addressdetails=1`
        );

        if (response.ok) {
          
          
          const data = await response.json();
          setLoc(data.display_name);
          const area = data.address?.suburb || data.address?.town || data.address?.city || data.address?.country;
          setAddress(area || 'Area not found');
        
        } else {
          setAddress('Address not found');
        }
      } catch (error) {
        console.error('Error:', error);
        setAddress('Error fetching address');
      }

      window.sessionStorage.setItem("lat", markerPosition.lat);
      window.sessionStorage.setItem("lon", markerPosition.lng);
      window.sessionStorage.setItem("add", loc);
      window.sessionStorage.setItem("area", address);

      // console.log(markerPosition.lat);

      
      // console.log(loc);
      // console.log(address);
    });

    return () => {
      map.remove();
    };
  }, [props.lat, props.lon,loc,address]);
  

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '500px' }}></div> 
      <br />
      <br />
      <Card style={{marginLeft:"-21px",marginRight:"-28px",marginTop:"10px"}}>

        <div style={{marginTop:"-40px",marginBottom:"-30px"}}>
          <h2>Selected Location</h2>
          {/* {val = `${markerPosition.lat.toFixed(6)}`} */}
          <p>Latitude: {markerPosition.lat.toFixed(6)}</p>
          <p>Longitude: {markerPosition.lng.toFixed(6)}</p>
          <p>Address: {loc}</p>
          <p>Area: {address}</p>
        </div>
      </Card>
    </div>
  );
}

export default Map;
