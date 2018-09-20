import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Label } from 'rc-bmap';
import { Button } from 'antd';

class LabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '这是标签哦',
      point: {
        lng: 116.404,
        lat: 39.915,
      },
      offset: {
        width: 3,
        height: 0,
      },
      massClear: false,
      title: '标签也可以是html哦',
      zIndex: 100,
      events: {
        click() {
          console.log('label click');
        },
      },
      style: {
        backgroundColor: 'red',
        color: '#fff',
      },
    };
  }

  render() {
    const {
      content, point, offset, massClear, title, events, zIndex, style,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Label
            content={content}
            point={point}
            offset={offset}
            massClear={massClear}
            title={title}
            events={events}
            zIndex={zIndex}
            style={style}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <LabelExample />,
  document.getElementById('root'),
);
