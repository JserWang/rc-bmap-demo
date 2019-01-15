import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Constants,
  Navigation,
  Scale,
  Base,
} from 'rc-bmap';
import { Button } from 'antd';

const { CONTROL_ANCHOR, NAVIGATION_CONTROL_TYPE } = Constants;

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
    const { isShow } = this.state;
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
                <Scale anchor={CONTROL_ANCHOR.TOP_LEFT} />
                <Navigation />
                <Navigation
                  anchor={CONTROL_ANCHOR.TOP_RIGHT}
                  type={NAVIGATION_CONTROL_TYPE.SMALL}
                />
              </React.Fragment>
            )
          }
        </Map>
        <Button onClick={this.handleAdd}>添加</Button>
        <Button onClick={this.handleRemove}>删除</Button>
        <div>在地图的左上、右上分别展示完整、缩略样式的缩放平移控件；同时在地图的左上方展示比例尺控件，点击按钮查看效果</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
