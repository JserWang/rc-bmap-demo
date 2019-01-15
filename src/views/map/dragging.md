import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

class Example extends Component {
  state = {
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
    const { dragging } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={8}
          dragging={dragging}
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
