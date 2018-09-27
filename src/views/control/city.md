import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  CityList,
  Offset,
  Events,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
    };
  }

  onChangeBefore = () => {
    console.log('onChangeBefore');
  }

  onChangeAfter = () => {
    console.log('onChangeAfter');
  }

  onChangeSuccess = () => {
    console.log('onChangeSuccess');
  }

  render() {
    const { center, offset } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={14}
          scrollWheelZoom
        >
          <CityList anchor={ControlAnchor.TOP_LEFT}>
            <Offset width="10" height="20" />
            <Events 
              onChangeBefore={this.onChangeBefore} 
              onChangeAfter={this.onChangeAfter}
              onChangeSuccess={this.onChangeSuccess}
            />
          </CityList>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
