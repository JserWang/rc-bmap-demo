import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  AutoComplete,
} from 'rc-bmap';
import { Button } from 'antd';

class AutoCompleteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '北京市',
      value: '',
      events: {
        onconfirm() {
          console.log('onconfirm');
        },
        onhighlight() {
          console.log('onhighlight');
        },
      },
    };
  }

  searchComplete = () => {
    console.log('searchComplete');
  }

  render() {
    const { events, location, value } = this.state;
    return (
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <AutoComplete
              input="suggest"
              searchComplete={this.searchComplete}
              events={events}
              location={location}
              value={value}
            />
          </Map>
          <input id="suggest" />
        </div>
    );
  }
}

ReactDOM.render(
  <AutoCompleteExample />,
  document.getElementById('root'),
);
