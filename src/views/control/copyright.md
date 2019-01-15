import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
  Constants,
  CopyrightControl,
} from 'rc-bmap';
import { Button } from 'antd';

const { Copyright } = CopyrightControl;
const { CONTROL_ANCHOR } = Constants;
const { Point } = Base;

class Example extends React.Component {
  state = {
    isShow: false,
  }

  handleShow = () => {
    this.setState({
      isShow: true,
    });
  }

  handleHide = () => {
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
          <CopyrightControl
            anchor={CONTROL_ANCHOR.TOP_RIGHT}
          >
            {
            isShow &&  
              <Copyright>
                <a href="#">这是新增版权控件呀</a>
              </Copyright>
            }
            <Copyright>
              <a href="#">我是自定义版权控件呀</a>
            </Copyright>
          </CopyrightControl>
        </Map>
        <Button onClick={this.handleShow}>显示</Button>
        <Button onClick={this.handleHide}>隐藏</Button>
        <div>在地图的左上、右上分别展示完整、缩略样式的缩放平移控件；同时在地图的左上方展示比例尺控件，点击按钮查看效果</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
