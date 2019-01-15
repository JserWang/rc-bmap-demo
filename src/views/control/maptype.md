
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
  Constants,
  MapType,
  OverviewMap,
} from 'rc-bmap';
import { Button } from 'antd';

const { CONTROL_ANCHOR, MAP_TYPE } = Constants;

const { Point } = Base;

class Example extends React.Component {
  state = {
    isShow: false,
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
      isShow,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={11}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          {
            isShow && (
              <React.Fragment>
                <MapType
                  mapTypes={[
                    MAP_TYPE.NORMAL,
                    MAP_TYPE.HYBRID,
                  ]}
                />
                <MapType
                  anchor={CONTROL_ANCHOR.TOP_LEFT}
                  mapTypes={[
                    MAP_TYPE.NORMAL,
                    MAP_TYPE.SATELLITE,
                    MAP_TYPE.PERSPECTIVE,
                  ]}
                />
                <OverviewMap
                  anchor={CONTROL_ANCHOR.BOTTOM_RIGHT}
                  isOpen
                />
              </React.Fragment>
            )
          }
        </Map>
        <Button onClick={this.handleAdd}>添加</Button>
          <Button onClick={this.handleRemove}>删除</Button>
          <div>
            点击地图类型控件切换普通地图、卫星图、三维图、混合图（卫星图+路网），右下角是缩略图，点击按钮查看效果
          </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
