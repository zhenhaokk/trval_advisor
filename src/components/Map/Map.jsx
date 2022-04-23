import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = { lat: -34.397, lng: 150.644 };

  return (
    //mapContainer
    <div className={classes.mapContainer}>
      {/* googlemap */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAixjfUslXcFiHTGGyu9xlVErPKdd5GtuI'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map