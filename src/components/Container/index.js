import React, { Component } from 'react';
import {
  Row, Col, Button,
} from 'antd';
import throttle from 'lodash.throttle';
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
    this.codeNode = React.createRef();
    this.mapNode = React.createRef();

    this.onDocumentMouseMove = throttle(this.getNewWidth, 16);
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
    const text = document.createElement('textarea');
    text.innerHTML = this.currentCode || code;
    document.body.appendChild(text);
    text.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
    }
    document.body.removeChild(text);
  }

  transformCode = (code) => {
    const result = window.Babel.transform(code, babelOptions);
    return result.code;
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    this.codeCurrentWidth = this.codeNode.current.clientWidth;
    this.mapCurrentWidth = this.mapNode.current.clientWidth;
    this.currentClientX = e.clientX || window.event.clientX;
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    document.addEventListener('mouseup', this.onDocumentMouseUp, false);
  }

  onDocumentMouseUp = () => {
    document.removeEventListener('mousemove', this.onDocumentMouseMove, false);
    document.removeEventListener('mouseup', this.onDocumentMouseUp, false);
  }

  getNewWidth = () => {
    if (window.event) {
      const { clientX } = window.event;
      const dragWidth = clientX - this.currentClientX;// 拖拽距离
      let codeDragWidth = this.codeCurrentWidth + dragWidth;
      let mapDragWidth = this.mapCurrentWidth - dragWidth;
      const totalWidth = this.mapCurrentWidth + this.codeCurrentWidth;
      if (codeDragWidth < MIN_CODE_WIDTH) {
        codeDragWidth = MIN_CODE_WIDTH;
        mapDragWidth = totalWidth - codeDragWidth;
      }
      if (mapDragWidth < MIN_MAP_WIDTH) {
        mapDragWidth = MIN_MAP_WIDTH;
        codeDragWidth = totalWidth - mapDragWidth;
      }
      const codePercentWidth = codeDragWidth / totalWidth * 100;
      const mapPercentWidth = mapDragWidth / totalWidth * 100;
      this.setState({
        codeWidth: `${codePercentWidth}%`,
        mapWidth: `${mapPercentWidth}%`,
      });
    }
  }

  render() {
    const { code } = this.props;
    const { codeWidth, mapWidth } = this.state;
    return (
      <Row style={{ height: '100vh' }}>
        <Col span={7} className={styles.code} style={{ width: codeWidth }}>
          <div ref={this.codeNode} className={styles.codeHeader}>
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
          <div ref={this.mapNode} id="demo" />
        </Col>
      </Row>
    );
  }
}

export default Container;
