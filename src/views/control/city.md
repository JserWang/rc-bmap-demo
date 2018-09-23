import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  CityList,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      offset: {
        width: 10,
        height: 20,
      },
    };
  }

  onChangeBefore = () => {
    console.log('onChangeBefore');
  }

  onChangeAfter = () => {
    console.log('onChangeAfter');
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
          <CityList
            offset={offset}
            anchor={ControlAnchor.TOP_LEFT}
            onChangeBefore={this.onChangeBefore}
            onChangeAfter={this.onChangeAfter}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
