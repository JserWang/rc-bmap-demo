import React from 'react';
import {
  Row, Col, Button,
} from 'antd';
import CodeMirror from '../CodeMirror';
import styles from './index.css';

require('codemirror/mode/javascript/javascript');

const options = {
  lineNumbers: true,
};

export default function (props) {
  return (
    <Row style={{ height: '100vh' }}>
      <Col span={7} style={{ background: 'rgb(245, 242, 240)', height: '100vh' }}>
        <div className={styles.codeHeader}>
          <span>源代码编辑器</span>
          <span>
            <Button shape="circle" icon="copy" />
            <Button type="primary" shape="circle" icon="play-circle" className={styles.button} />
          </span>
        </div>
        <CodeMirror value={props.code} options={options} className={styles.codeContainer} />
      </Col>
      <Col span={17} style={{ height: '100vh' }}>
        <div>
          {props.children}
        </div>
      </Col>
    </Row>
  );
}
