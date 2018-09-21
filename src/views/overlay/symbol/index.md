/**
 *@title：矢量图标
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Symbol, SymbolShapeType } from 'rc-bmap';
import { Button } from 'antd';

class SymbolExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: {
        lng: 116.404,
        lat: 39.915,
      },
      path: SymbolShapeType.FORWARD_CLOSED_ARROW,
      anchor: {
        height: 10,
        width: 50,
      },
      fillColor: 'red',
      fillOpacity: 0.8,
      scale: 5,
      rotation: 0,
      strokeColor: 'blue',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      isShow: true,
    };
  }

  hideSymbol = () => {
    this.setState({
      isShow: false,
    });
  }

  showSymbol = () => {
    this.setState({
      isShow: true,
    });
  }

  render() {
    const {
      point, path, anchor, fillColor, fillOpacity, scale,
      rotation, strokeColor, strokeOpacity, strokeWeight, isShow,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
        >
          {isShow
          && (
            <Symbol
              point={point}
              path={path}
              anchor={anchor}
              fillColor={fillColor}
              fillOpacity={fillOpacity}
              scale={scale}
              rotation={rotation}
              strokeColor={strokeColor}
              strokeOpacity={strokeOpacity}
              strokeWeight={strokeWeight}
            />)}
        </Map>
        <Button onClick={this.hideSymbol}>隐藏</Button>
        <Button onClick={this.showSymbol}>显示</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <SymbolExample />,
  document.getElementById('root'),
);
