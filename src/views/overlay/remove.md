import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Label } from 'rc-bmap';
import { Button } from 'antd';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      offset: {
        width: 20,
        height: -10
      },
      points: [],
    };
  }

  mapMounted = (mapInstance) => {
    const points = [];
    const bounds = mapInstance.getBounds();
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    const lngSpan = Math.abs(sw.lng - ne.lng);
    const latSpan = Math.abs(ne.lat - sw.lat);
	  // 随机向地图添加25个标注
    for (let i = 0; i < 25; i += 1) {
      const point = {
        lng: sw.lng + lngSpan * (Math.random() * 0.7),
        lat: ne.lat - latSpan * (Math.random() * 0.7),
      };
      points.push(point);
    }

    this.setState({
      points,
    });
  }

  handleRemove = () => {
    const { points } = this.state;
    points.splice(2, 1);
    this.setState({
      points,
    });
  }

  render() {
    const { 
      center, points, offset,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={15}
          scrollWheelZoom
          mapMounted={this.mapMounted}
        >
          {
            points.map((item, index) => (
              <Marker 
                point={item} 
                label={<Label content={`我是第${index + 1}个标注`} offset={offset} />}
              />
            ))
          }
        </Map>
        <Button onClick={this.handleRemove}>删除第3个标注</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
