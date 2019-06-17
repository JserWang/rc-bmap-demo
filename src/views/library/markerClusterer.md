import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
  Marker,
  Constants,
  BMapUtil,
  MarkerClusterer,
} from 'rc-bmap';

const { Point } = Base;
const { ANIMATION } = Constants;

const getMarkers = () => {
  const markers = [];
  for (let i = 0; i < 100; i += 1) {
    const lng = Math.random();
    const lat = Math.random();
    markers.push({
      point:  {
        lng: Math.sign(lng - 0.5) * lng * 0.1 + 116.404,
        lat: Math.sign(lat - 0.5) * lat * 0.1 + 39.915
      }
    });
  }
  return markers;
};

const getStyles = () => {
  return [{
    url: 'https://lbsyun.baidu.com/jsdemo/img/tianAnMen.jpg',
    size: {width: 64, height: 64},
    // anchor:{width: 32, height: 32},
    // offset: {width: 24, height: 24},
    textSize: 24,
    textColor: 'red',
  }];
};

const markerClustererMarkers = getMarkers();
const markerClustererStyles = getStyles();


const Example = () => (
  <div style={{ height: '100vh' }}>
    <Map
      ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
      zoom={15}
      scrollWheelZoom
    >
      <Point name="center" lng="116.404" lat="39.915" />
      <MarkerClusterer
        markers={markerClustererMarkers}
        // styles={markerClustererStyles}
      />
    </Map>
  </div>
);

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
