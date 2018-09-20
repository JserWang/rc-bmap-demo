import React, { Component } from 'react';
import {
  Row, Col, Button, Spin, message,
} from 'antd';
import throttle from 'lodash.throttle';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import styles from './index.css';
// for codeMirror
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';

const options = {
  theme: 'dracula',
  tabSize: 2,
  keyMap: 'sublime',
  mode: 'jsx',
};

const MIN_CODE_WIDTH = 200;// 代码编辑器最小宽度
const MIN_MAP_WIDTH = 200;// 地图最小宽度

class Container extends Component {
  constructor() {
    super();
    this.state = {
      codeWidth: '',
      mapWidth: '',
      loading: false,
    };
    this.codeNode = React.createRef();
    this.mapNode = React.createRef();

    this.onDocumentMouseMove = throttle(this.getNewWidth, 16);
  }

  componentDidMount() {
    this.handleRunClick();
  }

  handleCodeChange = (instance) => {
    this.currentCode = instance.getValue();
  }

  handleRunClick = () => {
    this.setState({
      loading: true,
    });
    axios.get('/api/run', {
      params: {
        code: this.currentCode,
      },
    }).then(this.processCodeResult)
      .catch(() => {
        this.setState({
          loading: false,
        });
        message.warning('Server error', 1.5);
      });
  }

  copyCode = () => {
    const text = document.createElement('textarea');
    text.innerHTML = this.currentCode;
    document.body.appendChild(text);
    text.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
    }
    document.body.removeChild(text);
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    this.codeCurrentWidth = this.codeNode.current.clientWidth;
    this.mapCurrentWidth = this.mapNode.current.clientWidth;
    this.currentClientX = (e || window.event).clientX;
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    document.addEventListener('mouseup', this.onDocumentMouseUp, false);
  }

  onDocumentMouseUp = () => {
    document.removeEventListener('mousemove', this.onDocumentMouseMove, false);
    document.removeEventListener('mouseup', this.onDocumentMouseUp, false);
  }

  getNewWidth = (e) => {
    if (e || window.event) {
      const event = e || window.event;
      const { clientX } = event;
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

  processCodeResult = (res) => {
    this.setState({
      loading: false,
    });

    this.createIFrame(res.data);
  }

  createIFrame = (html) => {
    const parent = document.querySelector('#preview-container');
    let frame = document.querySelector('#preview');
    if (frame) {
      parent.removeChild(frame);
    }
    const frameNode = document.createElement('iframe');
    frameNode.name = 'preview';
    frameNode.height = '100%';
    frameNode.width = '100%';
    frameNode.id = 'preview';
    frameNode.frameBorder = '0';
    parent.appendChild(frameNode);
    frame = frameNode;

    let iframe = frame.contentWindow
      || frame.contentDocument.document || frame.contentDocument;
    iframe = iframe.document;
    iframe.open('text/html');
    iframe.write(html);
    iframe.close();
  }

  render() {
    const { code } = this.props;
    const { codeWidth, mapWidth, loading } = this.state;
    return (
      <Row align="middle" className={styles.container}>
        <Col span={9} className={styles.code} style={{ width: codeWidth }}>
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
          <div className={styles.codeWrapper}>
            <CodeMirror
              value={code}
              options={options}
              className={styles.codeContainer}
              onChange={this.handleCodeChange}
            />
          </div>
        </Col>
        <Col span={15} className={styles.rightWrapper} style={{ width: mapWidth }}>
          <div
            className={styles.splitLine}
            onMouseDown={this.handleMouseDown}
          />
          <Spin size="large" spinning={loading} wrapperClassName={styles.spinWrapper}>
            <div id="preview-container" className={styles.previewContainer} ref={this.mapNode} />
          </Spin>
        </Col>
      </Row>
    );
  }
}

export default Container;
