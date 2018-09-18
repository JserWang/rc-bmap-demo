import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  MapType,
  Navigation,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.332782,
        lat: 40.007978,
      },
      zoom: 14,
    };
  }

  render() {
    const {
      zoom, center
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          center={center}
          zoom={zoom}
        >
            <Navigation />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
