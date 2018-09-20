import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  OverviewMap,
} from 'rc-bmap';
import { Button } from 'antd';

class OverviewMapExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      isOpen: true,
      size: {
        width: 150,
        height: 150,
      },
      events: {
        viewchanged: (event) => {
          console.log('viewchanged', event);
        },
        viewchanging: (event) => {
          console.log('viewchanging', event);
        },
      },
    };
  }

  render() {
    const {
      offset, anchor, size, isOpen, events,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <OverviewMap
            offset={offset}
            anchor={anchor}
            size={size}
            isOpen={isOpen}
            events={events}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <OverviewMapExample />,
  document.getElementById('root'),
);