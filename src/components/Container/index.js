import React, { Component } from 'react';
import {
  Row, Col, Button,
} from 'antd';
// import throttle from 'lodash.throttle';
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
  constructor() {
    super();
    this.state = {
      codeWidth: '',
      mapWidth: '',
    };
  }

  componentDidMount() {
    this.handleRunClick();
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
    this.currentClientX = e.clientX || window.event.clientX;// 记录x坐标
    document.onmousemove = () => {
      const clientX = e.clientX || window.event.clientX;
      const dragWidth = clientX - this.currentClientX;// 拖拽距离
      let codeDragWidth = this.codeCurrentWidth + dragWidth;
      let mapDragWidth = this.mapCurrentWidth - dragWidth;
      if (codeDragWidth < MIN_CODE_WIDTH) {
        codeDragWidth = MIN_CODE_WIDTH;
        mapDragWidth = this.mapCurrentWidth + this.codeCurrentWidth - codeDragWidth;
      }
      if (mapDragWidth < MIN_MAP_WIDTH) {
        mapDragWidth = MIN_MAP_WIDTH;
        codeDragWidth = this.codeCurrentWidth + this.mapCurrentWidth - mapDragWidth;
      }

      this.setState({
        codeWidth: `${codeDragWidth}px`,
        mapWidth: `${mapDragWidth}px`,
      });

      document.onmouseup = () => {
        this.handleRunClick();
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }

  getCodeNode = (ref) => {
    this.codeCurrentWidth = ref.clientWidth;
    console.log(this.codeCurrentWidth);
  }

  getMapNode = (ref) => {
    this.mapCurrentWidth = ref.clientWidth;
    console.log(this.mapCurrentWidth);
  }

  render() {
    const { code } = this.props;
    const { codeWidth, mapWidth } = this.state;
    return (
      <Row style={{ height: '100vh' }}>
        <Col span={7} style={{ background: 'rgb(245, 242, 240)', height: '100vh', width: codeWidth }}>
          <div ref={this.getCodeNode} className={styles.codeHeader}>
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
        <Col span={17} style={{ height: '100vh', width: mapWidth }}>
          <div
            className={styles.splitLine}
            onMouseDown={this.handleMouseDown}
          />
          <div ref={this.getMapNode} id="demo" />
        </Col>
      </Row>
    );
  }
}

export default Container;
