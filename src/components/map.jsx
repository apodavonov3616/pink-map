/*global google*/
import React, { useState, useMemo, userCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from "@react-google-maps/api"
import mapStyles from "./../mapStyles"
import Search from "./search";

export default function Map() {

    const center = useMemo(() => ({ lat: 40.73629, lng: -73.99379 }), []);
    const options = {
        // styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true
    }

    const mapRef = React.useRef();
  const onMapLoad = React.useCallback(map => { 
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
    let map = mapRef.current;



    let request = { 
      location: { lat, lng },
      radius: "500",
      type: ["church"]  
    };

    let service = new google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, callback);
    // service.getDetails(request, callback)
    // service.textSearch(request, callback);

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          new google.maps.Marker({
            position: place.geometry.location,
            map
          });
          console.log(results[i].name)
          console.log(results[i].vicinity)
        }
      }
    }
  }, []);

//   function callback2(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         var place = results[i];
//         Marker(results[i]);
//       }
//     }
//   }

// function(input) {
//     if input intor 
//     array = [cafe,bar, ]
//     else 
//     array = [amusement]
//     Math.random(arra.alkaray.lenght)
//     request = { 
//         location: { lat, lng },
//         radius: "500",
//         type: ["church"]  
//       };
// }

{/* <button onlcik=function(introverted)></button> */}

    return <div className="container">
        <div className="controls"><h1>Map</h1></div>
        <Search panTo={panTo} />
        <div className="map">
            <GoogleMap 
            zoom={10} 
            center={center} 
            mapContainerClassName="map-container"
            options={options}
            onLoad={onMapLoad}
            >
            </GoogleMap>
        </div>
    </div >
}