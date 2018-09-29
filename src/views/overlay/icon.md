import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Icon } from 'rc-bmap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
    };
  }

  render() {
    const { center } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={15}
          scrollWheelZoom
        >
          <Marker
            point={center}
          >
            <Icon
              url="http://lbsyun.baidu.com/jsdemo/img/fox.gif"
              size={{
                width: 300,
                height: 157,
              }}
            />
          </Marker>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
