import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

class Example extends Component {
  state = {
    zoom: 8,     
  }

  componentDidMount() {
    // 两秒后放大到14级
    setTimeout(() => {
      this.setState({
        zoom: 14,
      })
    }, 2000);
  }

  render() {
    const {
      center, zoom,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={zoom}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
