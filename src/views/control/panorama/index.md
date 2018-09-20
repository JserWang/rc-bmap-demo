import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  Panorama,
} from 'rc-bmap';
import { Button } from 'antd';

class PanoramaExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
    };
  }

  render() {
    const { offset, anchor } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Panorama
            offset={offset}
            anchor={anchor}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <PanoramaExample />,
  document.getElementById('root'),
);
