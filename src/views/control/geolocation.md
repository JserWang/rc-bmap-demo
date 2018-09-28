import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Geolocation,
  Events,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
    };
  }

  handleLocationSuccess = (e) => {
    // 定位成功事件
    let address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert(`当前定位地址为：${address}`);
  }

  handleLocationError = (e) => {
    // 定位失败事件
    alert(e.message);
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
          zoom={11}
          scrollWheelZoom
        >
          <Geolocation>
            <Events 
              locationSuccess={this.handleLocationSuccess}
              locationError={this.handleLocationError}
            />
          </Geolocation>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
