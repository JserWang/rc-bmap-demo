import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'rc-bmap';
import { Button } from 'antd';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { 
        lng: 116.404,
        lat: 39.915,
      },
      dragging: false,
    };
  }

  handleDragging = () => {
    this.setState({
      dragging: true,
    });
  }

  handleCancelDragging = () => {
    this.setState({
      dragging: false,
    });
  }

  render() {
    const { center, dragging } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          scrollWheelZoom
        >
          <Marker
            point={center}
            dragging={dragging}
          />
          <Button onClick={this.handleDragging}>可拖拽</Button>
          <Button onClick={this.handleCancelDragging}>不可拖拽</Button>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
