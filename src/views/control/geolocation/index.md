import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  Geolocation,
} from 'rc-bmap';
import { Button } from 'antd';

class GeolocationExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      showAddressBar: true,
      autoLocation: false,
      locationIcon: null,
      events: {
        locationSuccess: (event) => {
          console.log('locationSuccess', event);
        },
        locationError: (event) => {
          console.log('locationError', event);
        },
      },
    };
  }

  render() {
    const {
      offset, anchor, showAddressBar, locationIcon, autoLocation, events,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Geolocation
            offset={offset}
            anchor={anchor}
            showAddressBar={showAddressBar}
            locationIcon={locationIcon}
            autoLocation={autoLocation}
            events={events}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <GeolocationExample />,
  document.getElementById('root'),
);
