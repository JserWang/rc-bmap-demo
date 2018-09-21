/**
 *@title：从多个点里删除特定点
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Label } from 'rc-bmap';
import { Button } from 'antd';

class MarkerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        { lng: 116.418261, lat: 39.921984 },
        { lng: 116.423332, lat: 39.916532 },
        { lng: 116.419787, lat: 39.930658 },
        { lng: 116.418455, lat: 39.920921 },
        { lng: 116.418843, lat: 39.915516 },
        { lng: 116.42546, lat: 39.918503 },
        { lng: 116.423289, lat: 39.919989 },
        { lng: 116.422039, lat: 39.91782 },
        { lng: 116.41387, lat: 39.917253 },
      ],
    };
  }

  removeOverlay = () => {
    const { points } = this.state;
    for (let i = 0; i < points.length - 1; i += 1) {
      if (i === 2) {
        points.splice(2, 1);
      }
    }
    this.setState({
      points,
    });
  }

  render() {
    const { points } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.handleMapMounted}
        >
          {
            points.map((item, index) => (
              <div>
                <Marker point={item} />
                <Label point={item} content={`我是第${index + 1}个标注`} />
              </div>
            ))
          }
        </Map>
        <Button onClick={this.removeOverlay}>删除第3个标注</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <MarkerExample />,
  document.getElementById('root'),
);
