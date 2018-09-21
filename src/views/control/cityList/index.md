/**
 *@title：添加城市列表控件
 */

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
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
    };
  }

  onChangeBefore = () => {
    console.log('onChangeBefore');
  }

  onChangeAfter = () => {
    console.log('onChangeAfter');
  }

  render() {
    const { offset, anchor } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <CityList
            offset={offset}
            anchor={anchor}
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
