/**
 *@title：
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Label } from 'rc-bmap';

class MarkerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: { lng: 116.404, lat: 39.915 },
      events: {
        click: this.click,
      },
    };
  }
  
  click = () => {
    const { point } = this.state;
    alert(`marker的位置是${point.lng}，${point.lat}`); 
  }

  render() {
    const {
      point, events,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Marker
            point={point}
            events={events}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <MarkerExample />,
  document.getElementById('root'),
);
