import React from 'react';
import styles from './styles.module.css';
import iAmHereIcon from './images/I am here icon.png';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

function Map() {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAP_KEY,
    });


    return( isLoaded ? 
        <GoogleMap
            mapContainerClassName={styles.mapContainer}
            center= {{lat: 37.9595694, lng: -122.3482515}}
            zoom={10}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}>

            <Marker icon={{
                url: iAmHereIcon,
                scaledSize: new google.maps.Size(100, 100),
            }} position={{lat: 37.9595694, lng: -122.3482515}}/>

        </GoogleMap> : <div> is loading...</div>
    )
}

export default Map;