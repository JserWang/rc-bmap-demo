import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'rc-bmap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.400244,
        lat: 39.92556,
      },
      events: {
        click: this.handleClick,
      },
    };
  }

  handleClick = () => {
    const position = this.marker.getPosition();
    alert(`marker的位置是${position.lng}，${position.lat}`);
  }

  getMarker = (instance) => {
    this.marker = instance;
  }

  render() {
    const {
      center, events,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          scrollWheelZoom
        >
          <Marker
            getInstance={this.getMarker}
            point={center}
            events={events}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
