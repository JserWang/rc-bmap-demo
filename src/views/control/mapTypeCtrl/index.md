/**
 *@title：添加/删除地图类型、缩略图控件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  MapTypeCtrl,
  MapType,
  MapTypeControlType,
  OverviewMap,
} from 'rc-bmap';
import { Button } from 'antd';

class MapTypeCtrlExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      typeAnchor: ControlAnchor.TOP_LEFT,
      overviewAnchor: ControlAnchor.TOP_RIGHT,
      type: MapTypeControlType.HORIZONTAL,
      mapTypes: [MapType.NORMAL, MapType.PERSPECTIVE, MapType.SATELLITE, MapType.HYBRID],
      isShow: false,
      isOpen: true,
      size: {
        width: 150,
        height: 150,
      },
      events: {
        viewchanged: (event) => {
          console.log('viewchanged', event);
        },
        viewchanging: (event) => {
          console.log('viewchanging', event);
        },
      },
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
      offset, typeAnchor, overviewAnchor, type, mapTypes, isShow, isOpen, size, events,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          {isShow
            && (<MapTypeCtrl
              offset={offset}
              anchor={typeAnchor}
              type={type}
              mapTypes={mapTypes}
            />
            )
          }
          {isShow
            && (<OverviewMap
              offset={offset}
              anchor={overviewAnchor}
              size={size}
              isOpen={isOpen}
              events={events}
            />
            )
          }
          <Button onClick={this.addControl}>添加</Button>
          <Button onClick={this.removeControl}>删除</Button>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <MapTypeCtrlExample />,
  document.getElementById('root'),
);
