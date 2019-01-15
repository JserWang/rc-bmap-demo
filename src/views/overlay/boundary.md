import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Boundary, Base } from 'rc-bmap';
import { Button } from 'antd';

const { Point } = Base;

class Example extends Component {
  state = {
    name: '北京市海淀区'
  }

  handleChange = () => {
    this.setState({
      name: '北京市朝阳区'
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div style={{ height: '80vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={5}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Boundary
            autoViewport
            name={name}
            strokeColor="#ff0000"
            strokeWeight={2}
          />
        </Map>
        <Button onClick={this.handleChange}>改变为朝阳区</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
