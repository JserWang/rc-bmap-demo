import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  AutoComplete,
  Base,
} from 'rc-bmap';
import { Input, Button } from 'antd';

const { Point, Events } = Base;

class Example extends Component {
  state = {
    visible: true,
    value: '百度'
  }

  getAutoComplete = (ref) => {
    if (ref) {
      console.log(ref);
    }
  }

  onSearchComplete = () => {
    console.log('searchComplete');
  }

  handleConfirm = () => {
    console.log('confirm');
  }

  handleHighlight = () => {
    console.log('highlight');
  }

  handleChange = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    const { value, visible } = this.state;
    return (
      <div style={{ height: '70vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={14}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          {
            visible && <AutoComplete
              ref={this.getAutoComplete}
              input="suggest"
              location="北京市"
              value={value}
              onSearchComplete={this.onSearchComplete}
            >
              <Events
                onconfirm={this.handleConfirm}
                onhighlight={this.handleHighlight}
              />
            </AutoComplete>
          }
        </Map>
        <div>
          请输入：<Input id="suggest" />
        </div>
        <Button onClick={this.handleChange}>修改文本</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
