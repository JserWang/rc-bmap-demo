import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
} from 'rc-bmap';
import { Button } from 'antd';

const { Events, Point } = Base;

class Example extends React.Component {
  state = {
    visible: false,
  }

  handleClick = (e) => {
    alert(e.point.lng + ", " + e.point.lat);
  }

  handleBindClick = () => {
    this.setState({
      visible: true,
    });
  }

  handleUnbindClick = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div style={{ height: '80vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={14}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          {
            visible && <Events click={this.handleClick} />
          }
        </Map>
        <div>
          <Button onClick={this.handleBindClick}>增加地图点击事件</Button>
          <Button onClick={this.handleUnbindClick}>撤销地图点击事件</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
