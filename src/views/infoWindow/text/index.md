/**
 *@title：添加纯文字信息窗口
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker } from 'rc-bmap';

class InfoWindowExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '海底捞王府井店',
      content: '地址：北京市东城区王府井大街88号乐天银泰百货八层',
      point: {
        lng: 116.417854,
        lat: 39.921988,
      },
      offset: {
        width: 3,
        height: 0,
      },
      maxWidth: 250,
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
      title, point, offset, visible, content, closeOnClick,
      maxWidth, autoPan, displayMessage, message, events, infoEvent,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Marker point={point} events={events} />
          {visible && (<InfoWindow
            title={title}
            content={content}
            point={point}
            offset={offset}
            maxWidth={maxWidth}
            autoPan={autoPan}
            closeOnClick={closeOnClick}
            displayMessage={displayMessage}
            message={message}
            event={infoEvent}
          />
          )
          }
        </Map>
        点击标注点，可查看由纯文本构成的简单型信息窗口
      </div>
    );
  }
}

ReactDOM.render(
  <InfoWindowExample />,
  document.getElementById('root'),
);
