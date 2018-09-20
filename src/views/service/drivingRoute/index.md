import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  DrivingRoute,
  DrivingPolicy,
  getPoiByKeyword,
  IntercityPolicy,
} from 'rc-bmap';
import { Button } from 'antd';

class DrivingRouteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      center: {
        lng: 120.21937542,
        lat: 30.25924446,
      },
      policy: DrivingPolicy.NORMAL,
    };
  }

  getRoute = (instance) => {
    this.state.route = instance;
  };

  mapMounted = () => {
    const { route } = this.state;
    Promise.all(
      [getPoiByKeyword('百度大厦'), getPoiByKeyword('北京邮电大学西门')],
    ).then((res) => {
      route.search(res[0], res[1]);
    });
  };

  render() {
    const { center, policy } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
          center={center}
        >
          <DrivingRoute
            getInstance={this.getRoute}
            showInMap
            policy={policy}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <DrivingRouteExample />,
  document.getElementById('root'),
);
