import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Base } from 'rc-bmap';

const { Point, Events } = Base;

class Example extends Component {
  handleClick = () => {
    const position = this.marker.getPosition();
    alert(`marker的位置是${position.lng}，${position.lat}`);
  }

  getMarker = (ref) => {
    if (ref) {
    	this.marker = ref.instance;
    }
  }

  render() {

    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          mapClick={false}
          zoom={14}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Marker
            ref={this.getMarker}
          >
            <Point lng="116.404" lat="39.915" />
            <Events click={this.handleClick} />
          </Marker>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
