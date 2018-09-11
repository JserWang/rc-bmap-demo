import React, { Component } from 'react';
import {
  Row, Col, Button,
} from 'antd';
import CodeMirror from '../CodeMirror';
import styles from './index.css';

require('codemirror/mode/javascript/javascript');

const options = {
  lineNumbers: true,
};

const babelOptions = {
  presets: ['stage-0', 'react', 'es2015'],
  plugins: [
    'transform-class-properties',
  ],
};

const MIN_CODE_WIDTH = 200;// 代码编辑器最小宽度
const MIN_MAP_WIDTH = 200;// 地图最小宽度

class Container extends Component {
  componentDidMount() {
    this.handleRunClick();
    this.codeDiv = document.getElementById('codeDiv');
    this.mapDiv = document.getElementById('mapDiv');
  }

  handleCodeChange = (code) => {
    this.currentCode = code;
  }

  handleRunClick = () => {
    const { code } = this.props;
    try {
      const result = this.transformCode(this.currentCode || code);
      /* eslint-disable */
      eval(`
        function require(path) {
          if (path === 'react' ) {
            path = 'React';
          } else if (path === 'react-dom') {
            path = 'ReactDOM';
          }
          return window[path];
        }
        ${result}
      `);
      /* eslint-enable */
    } catch (err) {
      console.log(err);
    }
  }

  copyCode = () => {
    const { code } = this.props;
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', (this.currentCode || code));
    document.body.appendChild(input);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      alert('复制成功');
    }
    document.body.removeChild(input);
  }

  transformCode = (code) => {
    const result = window.Babel.transform(code, babelOptions);
    return result.code;
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    this.codeCurrentwidth = this.codeDiv.clientWidth;// 编辑器宽度
    this.mapCurrentwidth = this.mapDiv.clientWidth;// 地图宽度
    this.currentClientX = e.clientX || window.event.clientX;// 记录x坐标
    document.onmousemove = () => {
      const clientX = e.clientX || window.event.clientX;
      const dragWidth = clientX - this.currentClientX;// 拖拽距离
      let codeWidth = this.codeCurrentwidth + dragWidth;
      let mapWidth = this.mapCurrentwidth - dragWidth;
      if (codeWidth < MIN_CODE_WIDTH) {
        codeWidth = MIN_CODE_WIDTH;
        mapWidth = this.mapCurrentwidth + this.codeCurrentwidth - codeWidth;
      }
      if (mapWidth < MIN_MAP_WIDTH) {
        mapWidth = MIN_MAP_WIDTH;
        codeWidth = this.codeCurrentwidth + this.mapCurrentwidth - mapWidth;
      }
      this.mapDiv.style.width = `${mapWidth}px`;
      this.codeDiv.style.width = `${codeWidth}px`;
      document.onmouseup = () => {
        this.handleRunClick();
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }

  render() {
    const { code } = this.props;
    return (
      <Row style={{ height: '100vh' }}>
        <Col span={7} id="codeDiv" style={{ background: 'rgb(245, 242, 240)', height: '100vh' }}>
          <div className={styles.codeHeader}>
            <span>源代码编辑器</span>
            <span>
              <Button shape="circle" icon="copy" onClick={this.copyCode} />
              <Button
                type="primary"
                className={styles.button}
                shape="circle"
                icon="play-circle"
                onClick={this.handleRunClick}
              />
            </span>
          </div>
          <CodeMirror
            value={code}
            options={options}
            className={styles.codeContainer}
            onChange={this.handleCodeChange}
          />
        </Col>
        <Col id="mapDiv" span={17} style={{ height: '100vh' }}>
          <div
            style={{
              position: 'absolute',
              left: '-5px',
              height: '100%',
              width: '10px',
              cursor: 'col-resize',
              zIndex: '99',
            }}
            onMouseDown={this.handleMouseDown}
          />
          <div id="demo" />
        </Col>
      </Row>
    );
  }
}

export default Container;
