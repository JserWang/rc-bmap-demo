import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Boundary } from 'rc-bmap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.403765,
        lat: 39.914850,
      },
    };
  }

  render() {
    const { center } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          center={center}
          zoom={5}
          scrollWheelZoom
        >
          <Boundary
            autoViewport
            name="北京市海淀区"
            strokeColor="#ff0000"
            strokeWeight={2}
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
