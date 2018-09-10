import React from 'react';
import {
  Map,
  MapType,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.332782,
        lat: 40.007978,
      },
      zoom: 14,
      placeHolder: '地图加载中...',
      minZoom: 3,
      maxZoom: 19,
      defaultCursor: '',
      draggingCursor: '',
      mapStyle: {
        style: 'normal',
      },
      mapType: MapType.NORMAL,
      highResolution: true,
      autoResize: true,
      mapClick: true,
      dragging: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      keyboard: true,
      inertialDragging: true,
      continuousZoom: true,
      pinchToZoom: true,
      events: {
        click: (event) => {
          console.log('mapClick', event);
        },
        zoomend: (event) => {
          console.log('zoomend', event);
        },
      },
      contextMenu: {
        items: [{
          text: '放大',
          callback() { global.bMapInstance.zoomIn(); },
        },
        {
          text: '缩小',
          callback() { global.bMapInstance.zoomOut(); },
          separator: true,
        }],
      },
    };
  }

  handleCenter = () => {
    const { center } = this.state;
    this.setState({
      center: { lng: center.lng + 0.05, lat: center.lat + 0.05 },
    });
  }

  handleZoom = () => {
    let { zoom } = this.state;
    if (zoom === 19) {
      zoom = 3;
    }
    this.setState({
      zoom: zoom + 1,
    });
  }

  handleMapStyle = () => {
    const { mapStyle } = this.state;
    this.setState({
      mapStyle: mapStyle.style === 'normal' ? { style: 'midnight' } : { style: 'normal' },
    });
  }

  handleMapType = () => {
    this.setState({
      mapType: MapType[getRandomMapType()],
    });
  }

  handleHighResolution = () => {
    const { highResolution } = this.state;
    this.setState({
      highResolution: !highResolution,
    });
  }

  handleAutoResize = () => {
    const { autoResize } = this.state;
    this.setState({
      autoResize: !autoResize,
    });
  }

  handleMapClick = () => {
    const { mapClick } = this.state;
    this.setState({
      mapClick: !mapClick,
    });
  }

  handleDragging = () => {
    const { dragging } = this.state;
    this.setState({
      dragging: !dragging,
    });
  }

  handleScrollWheelZoom = () => {
    const { scrollWheelZoom } = this.state;
    this.setState({
      scrollWheelZoom: !scrollWheelZoom,
    });
  }

  handleDoubleClickZoom = () => {
    const { doubleClickZoom } = this.state;
    this.setState({
      doubleClickZoom: !doubleClickZoom,
    });
  }

  handleKeyboard = () => {
    const { keyboard } = this.state;
    this.setState({
      keyboard: !keyboard,
    });
  }

  handleInertialDragging = () => {
    const { inertialDragging } = this.state;
    this.setState({
      inertialDragging: !inertialDragging,
    });
  }

  handLecontinuousZoom = () => {
    const { lecontinuousZoom } = this.state;
    this.setState({
      lecontinuousZoom: !lecontinuousZoom,
    });
  }

  handPinchToZoom = () => {
    const { pnchToZoom } = this.state;
    this.setState({
      pnchToZoom: !pnchToZoom,
    });
  }

  render() {
    const {
      zoom, center, placeHolder, minZoom, maxZoom,
      defaultCursor, draggingCursor, mapStyle, mapType,
      highResolution, autoResize, mapClick, dragging, scrollWheelZoom,
      doubleClickZoom, keyboard, inertialDragging, continuousZoom,
      pinchToZoom, events, contextMenu,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          center={center}
          zoom={zoom}
          placeHolder={placeHolder}
          minZoom={minZoom}
          maxZoom={maxZoom}
          defaultCursor={defaultCursor}
          draggingCursor={draggingCursor}
          mapStyle={mapStyle}
          mapType={mapType}
          highResolution={highResolution}
          autoResize={autoResize}
          mapClick={mapClick}
          dragging={dragging}
          scrollWheelZoom={scrollWheelZoom}
          doubleClickZoom={doubleClickZoom}
          keyboard={keyboard}
          inertialDragging={inertialDragging}
          continuousZoom={continuousZoom}
          pinchToZoom={pinchToZoom}
          events={events}
          contextMenu={contextMenu}
        />
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('demo'));
