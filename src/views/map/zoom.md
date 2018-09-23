import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      zoom: 8, 
    };
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
          center={center}
          zoom={zoom}
          scrollWheelZoom
        >
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
