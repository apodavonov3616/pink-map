import { useState, useMemo, userCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from "@react-google-maps/api"
import mapStyles from "./../mapStyles"

export default function Map() {

    const center = useMemo(() => ({ lat: 40.73629, lng: -73.99379 }), []);
    const options = {
        styles: mapStyles
    }

    return <div className="container">
        <div className="controls"><h1>Map</h1></div>
        <div className="map">
            <GoogleMap 
            zoom={10} 
            center={center} 
            mapContainerClassName="map-container"
            options={options}
            >
            </GoogleMap>
        </div>
    </div >
}