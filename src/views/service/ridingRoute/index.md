import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  getPoiByKeyword,
  RidingRoute,
} from 'rc-bmap';
import { Button } from 'antd';

class RidingRouteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
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
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
        >
          <RidingRoute
            getInstance={this.getRoute}
            showInMap
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <RidingRouteExample />,
  document.getElementById('root'),
);
