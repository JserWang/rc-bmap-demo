import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';

class Example extends Component {
  state = {
    center: {
      lng: 116.404,
      lat: 39.915,
    },
    dragging: false,    
  }

  componentDidMount() {
    // 两秒后开启拖拽
    setTimeout(() => {
      this.setState({
        dragging: true,
      });
    }, 2000);
  }

  render() {
    const {
      center, dragging,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={8}
          dragging={dragging}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
