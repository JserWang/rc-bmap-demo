import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Base } from 'rc-bmap';
import { Button } from 'antd';

const { Point } = Base;

class Example extends Component {
  state = {
    dragging: false,
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
          zoom={15}
          scrollWheelZoom
          mapClick={false}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Marker dragging={dragging}>
            <Point lng="116.404" lat="39.915" />
          </Marker>
        </Map>
        <Button onClick={this.handleDragging}>可拖拽</Button>
        <Button onClick={this.handleCancelDragging}>不可拖拽</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
