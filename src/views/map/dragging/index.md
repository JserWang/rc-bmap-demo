import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
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
      dragging: true,
    };
  }

  render() {
    const {
      center, dragging
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          center={center}
          dragging={dragging}
        >
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
