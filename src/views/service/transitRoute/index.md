import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  DrivingPolicy,
  TransitPolicy,
  getPoiByKeyword,
  TransitRoute,
} from 'rc-bmap';
import { Button } from 'antd';

class TransitRouteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
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

  handlePolicy = () => {
    this.setState({
      policy: TransitPolicy.NORMAL,
    });
  }

  render() {
    const { policy } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
        >
          <TransitRoute
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
  <TransitRouteExample />,
  document.getElementById('root'),
);
