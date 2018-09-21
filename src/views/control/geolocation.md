/**
 *@title：添加定位相关控件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  Geolocation,
  Navigation,
} from 'rc-bmap';

class Example extends React.Component {
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
        locationSuccess: (e) => {
          let address = '';
          address += e.addressComponent.province;
          address += e.addressComponent.city;
          address += e.addressComponent.district;
          address += e.addressComponent.street;
          address += e.addressComponent.streetNumber;
          alert(`当前定位地址为：${address}`);
        },
        locationError: (e) => {
          console.log('locationError', e);
        },
      },
    };
  }

  render() {
    const {
      offset, anchor, showAddressBar, locationIcon, autoLocation, events,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
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
          <Navigation />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
