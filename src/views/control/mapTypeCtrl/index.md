import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  MapTypeCtrl,
  MapType,
  MapTypeControlType,
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
      anchor: ControlAnchor.TOP_RIGHT,
      type: MapTypeControlType.HORIZONTAL,
      mapTypes: [MapType.NORMAL, MapType.PERSPECTIVE, MapType.SATELLITE, MapType.HYBRID],
    };
  }

  render() {
    const {
      offset, anchor, type, mapTypes,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <MapTypeCtrl
            offset={offset}
            anchor={anchor}
            type={type}
            mapTypes={mapTypes}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <MapTypeCtrlExample />,
  document.getElementById('root'),
);
