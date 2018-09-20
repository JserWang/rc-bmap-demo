import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  Navigation,
  NavigationType,
  Scale,
  LengthUnit,
} from 'rc-bmap';
import { Button } from 'antd';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleoffset: {
        width: 70,
        height: 10,
      },
      anchor: ControlAnchor.TOP_LEFT,
      type: NavigationType.LARGE,
      showZoomInfo: true,
      geolocation: false,
      unit: LengthUnit.METRIC,
      isShow: false,
    };
  }

  addControl = () => {
    this.setState({
      isShow: true,
    });
  }

  removeControl = () => {
    this.setState({
      isShow: false,
    });
  }

  render() {
    const {
      scaleoffset, anchor, type, showZoomInfo, geolocation, unit, isShow,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          { isShow && (<Navigation anchor={anchor} type={type} showZoomInfo={showZoomInfo} geolocation={geolocation} />)}
          { isShow && (<Scale offset={scaleoffset} anchor={anchor} unit={unit} />)}
        </Map>
        <Button onClick={this.addControl}>添加</Button>
        <Button onClick={this.removeControl}>删除</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
