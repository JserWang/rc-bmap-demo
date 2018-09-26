import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Overlay,
  ReactComponent,
} from 'rc-bmap';

@ReactComponent
class CustomOverlay extends Overlay {
  handleMouseOver() {
    const map = window.bMapInstance;
    const newZoom = map.getZoom() + 2;
    map.setZoom(newZoom);
  }

  handleMouseOut() {

  }

  getContainer() {
    console.log(this);
  }

  render() {
    return (
      <div
        ref={this.getContainer}
        style={{
          position: 'absolute',
          backgroundColor: '#EE5D5B',
          border: '1px solid #BC3B3A',
          color: 'white',
          height: 18,
          padding: 2,
          lineHeight: 18,
          whiteSpace: 'nowrap',
          MozUserSelect: 'none',
          fontSize: 12,
        }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <span>银湖海岸城</span>
        <div
          ref={this.getArrow}
          style={{
            background: 'url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat',
            position: 'absolute',
            width: 11,
            height: 10,
            top: 22,
            left: 10,
            overflow: 'hidden',
          }}
        />
      </div>
    );
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.3964,
        lat: 39.9093,
      },
      overlayPoint: {
        lng: 116.407845,
        lat: 39.914101,
      },
    };
  }

  render() {
    const { center, overlayPoint } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={15}
          scrollWheelZoom
        >
          <CustomOverlay point={overlayPoint} />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
