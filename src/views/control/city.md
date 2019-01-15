import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Constants,
  CityList,
  Base,
} from 'rc-bmap';

const { CONTROL_ANCHOR } = Constants;
const { Size, Events, Point } = Base;

class Example extends React.Component {
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
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={14}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <CityList anchor={CONTROL_ANCHOR.TOP_LEFT}>
            <Size name="offset" width="10" height="20" />
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
