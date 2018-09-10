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

class Container extends Component {
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

  transformCode = (code) => {
    const result = window.Babel.transform(code, babelOptions);
    return result.code;
  }

  render() {
    const { code } = this.props;
    return (
      <Row style={{ height: '100vh' }}>
        <Col span={7} style={{ background: 'rgb(245, 242, 240)', height: '100vh' }}>
          <div className={styles.codeHeader}>
            <span>源代码编辑器</span>
            <span>
              <Button shape="circle" icon="copy" />
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
        <Col span={17} style={{ height: '100vh' }}>
          <div id="demo" />
        </Col>
      </Row>
    );
  }
}

export default Container;
