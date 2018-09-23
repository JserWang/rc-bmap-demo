import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'rc-bmap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { 
        lng: 116.404,
        lat: 39.915,
      },
      icon: {
        url: 'http://lbsyun.baidu.com/jsdemo/img/fox.gif',
        size: {
          width: 300,
          height: 157,
        },
      },
    };
  }

  render() {
    const { center, icon } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          point={15}
          scrollWheelZoom
        >
          <Marker
            point={center}
            icon={icon}
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
