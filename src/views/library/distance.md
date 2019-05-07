import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
  DistanceTool
} from 'rc-bmap';
import { Button } from 'antd';

const { Point, Events, Size } = Base;

const { Icon } = DistanceTool;

class Example extends React.Component {

  getDistanceTool = (instance) => {
    this.distanceTool = instance;
  }

  handleOpen = () => {
    this.distanceTool.open();
  }

  handleClose = () => {
    this.distanceTool.close();
  }
  
  handleAddPoint = (e) => {
  	console.log('in add point', e);
  }
  
  handleDrawEnd = (e) => {
  	console.log('in draw end', e);
  }

  render() {
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={11}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <DistanceTool 
            getInstance={this.getDistanceTool} 
          	followText="这里设置提示文字"
            lineColor="blue"
            lineStroke={1}
            opacity={0.8}
            lineStyle="dashed"
          >
            <Events
              onaddpoint={this.handleAddPoint}
              ondrawend={this.handleDrawEnd}
            />
            <Icon
              name="secIcon"
              imageUrl="http://lbsyun.baidu.com/jsdemo/img/fox.gif"
            >
              <Size width="300" height="157" />
            </Icon>
          </DistanceTool>
        </Map>
        <Button onClick={this.handleOpen}>开启</Button>
        <Button onClick={this.handleClose}>关闭</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
