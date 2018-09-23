
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  MapTypeCtrl,
  MapType,
  OverviewMap,
} from 'rc-bmap';
import { Button } from 'antd';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      isShow: false,
    };
  }

  handleAdd = () => {
    this.setState({
      isShow: true,
    });
  }

  handleRemove = () => {
    this.setState({
      isShow: false,
    });
  }

  render() {
    const {
      center, isShow,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={11}
          scrollWheelZoom
        >
          {
            isShow && (
              <React.Fragment>
                <MapTypeCtrl
                  mapTypes={[
                    MapType.NORMAL,
                    MapType.HYBRID,
                  ]}
                />
                <MapTypeCtrl
                  anchor={ControlAnchor.TOP_LEFT}
                  mapTypes={[
                    MapType.NORMAL,
                    MapType.SATELLITE,
                    MapType.PERSPECTIVE,
                  ]}
                />
                <OverviewMap
                  anchor={ControlAnchor.BOTTOM_RIGHT}
                  isOpen
                />
              </React.Fragment>
            )
          }
          <Button onClick={this.handleAdd}>添加</Button>
          <Button onClick={this.handleRemove}>删除</Button>
          <div>
            点击地图类型控件切换普通地图、卫星图、三维图、混合图（卫星图+路网），右下角是缩略图，点击按钮查看效果
          </div>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
