import React, { useEffect, useState } from 'react';
import Map from './Map';
import val from './Map'
import { Typography } from 'antd';


const LocationDisplay = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
  
  function error() {
    console.log("Unable to retrieve your location");
  }
  
  
  return(
    <div>
  
        {latitude && longitude ? (
          <div>
            <Map lat={latitude} lon={longitude} />
            {/* <h1>hii</h1> */}
          </div>
        ) : (
          <div>Loading...</div>

          )}
        
        </div>
  )
};

export default LocationDisplay