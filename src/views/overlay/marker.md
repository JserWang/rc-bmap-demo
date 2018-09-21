/**
 *@title：设置点的弹跳动画
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Animation } from 'rc-bmap';

class MarkerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPoint: { lng: 116.404, lat: 39.915 },
      offset: { width: 10, height: 10 },
      icon: null,
      dragging: false,
      title: 'This is title',
      clicking: true,
      raiseOnDrag: false,
      draggingCursor: '',
      shadow: null,
      contextMenu: {
        items: [{
          text: '你好',
          callback() { console.log(666); },
          separator: true,
          width: 100,
          disabled: false,
        }],
      },
      rotation: 0,
      massClear: false,
    };

    this.icon = {
      url: 'http://lbsyun.baidu.com/jsdemo/img/fox.gif',
      size: {
        width: 300,
        height: 157,
      },
      opts: {
        imageOffset: { width: 10, height: 10 },
      },
    };

    this.shadow = {
      url: 'http://lbsyun.baidu.com/jsdemo/img/fox.gif',
      size: {
        width: 600,
        height: 314,
      },
      opts: {
        imageOffset: { width: 200, height: 100 },
      },
    };
  }

  render() {
    const {
      markerPoint, offset, icon, dragging, title, clicking,
      raiseOnDrag, draggingCursor, shadow, contextMenu, rotation, massClear,
    } = this.state;
    return (
<<<<<<< HEAD
      <div style={{ height: '100vh' }}>
=======
      <div style={{ height: '90vh' }}>
>>>>>>> upstream/master
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Marker
            point={markerPoint}
            offset={offset}
            icon={icon}
            animation={Animation.BOUNCE}
            dragging={dragging}
            title={title}
            clicking={clicking}
            raiseOnDrag={raiseOnDrag}
            rotation={rotation}
            draggingCursor={draggingCursor}
            shadow={shadow}
            contextMenu={contextMenu}
            massClear={massClear}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <MarkerExample />,
  document.getElementById('root'),
);
