/**
 *@title：添加图文结合的信息窗口
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker } from 'rc-bmap';

class InfoWindowExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>"
      + "<img style='float:right;margin:4px' id='imgDemo' src='http://lbsyun.baidu.com/jsdemo/img/tianAnMen.jpg' width='139' height='104' title='天安门'/>"
      + "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>"
      + '</div>',
      point: {
        lng: 116.404,
        lat: 39.915,
      },
      offset: {
        width: 10,
        height: -10,
      },
      autoPan: false,
      closeOnClick: false,
      displayMessage: false,
      message: '亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~',
      events: {
        click: this.clickMarker,
      },
      visible: false,
      infoEvent: {
        close: this.closeInfoWindow,
      },
    };
  }

  clickMarker = () => {
    this.setState({
      visible: true,
    });
  }

  closeInfoWindow = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {
      point, offset, visible, content, closeOnClick,
      autoPan, displayMessage, message, events, infoEvent,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Marker point={point} events={events} />
          {visible && (<InfoWindow
            content={content}
            point={point}
            offset={offset}
            autoPan={autoPan}
            closeOnClick={closeOnClick}
            displayMessage={displayMessage}
            message={message}
            event={infoEvent}
          />
          )
          }
        </Map>
        点击标注点，可查看由文本，图片构成的复杂型信息窗口
      </div>
    );
  }
}

ReactDOM.render(
  <InfoWindowExample />,
  document.getElementById('root'),
);
