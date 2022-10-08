import React from 'react';
import styles from './styles.module.css';
import {GoogleMap, useLoadScript} from '@react-google-maps/api';

function Map() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDSJo88uqWG6bFiFqCXyIwW6iKHTn__eLA"
    });

    const geocoding = (map) => {
        let geocoder = new google.maps.Geocoder();

        geocoder.geocode({address: "2409 aberdeen way, Richmond, CA 94806"}, (results, status)=> { 
            if(status != "OK"){ console.log("error"); return;}

            map.setCenter(results[0].geometry.location); 
            var marker = new google.maps.Marker({                 
                position: results[0].geometry.location,  
                map: map                                 
            })
            map.setZoom(10); 
        })
    }

    return( isLoaded ? 
        <GoogleMap
            mapContainerClassName={styles.mapContainer}
            onLoad={(map) => {geocoding(map)}}
            zoom={10}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
        >

        </GoogleMap> : <div> is loading...</div>
    )
}

export default Map;