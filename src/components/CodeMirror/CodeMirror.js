/* eslint-disable */
import CodeMirror from 'codemirror';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactCodeMirror extends Component {
  constructor(props) {
    super(props);
    this.codemirror = null;
    this.editor = null;
  }

  componentDidMount() {
    this.renderCodeMirror();
  }

  componentWillReceiveProps(nextProps) {
    const { value, width, height } = this.props;
    const val = this.editor.getValue();
    const next = nextProps.value;
    if (next !== undefined && next !== value && next !== val) {
      this.editor.setValue(nextProps.value);
    }
    const { options, width: nextWidth, height: nextHeight } = nextProps;
    this.setOptions(options);

    if (nextWidth !== width || nextHeight !== height) {
      this.editor.setSize(nextWidth, nextHeight);
    }
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.toTextArea();
    }
  }

  // http://codemirror.net/doc/manual.html#config
  setOptions(options) {
    if (typeof options === 'object') {
      Object.keys(options).forEach((name) => {
        if (options[name] && JSON.stringify(options[name])) {
          this.editor.setOption(name, options[name]);
        }
      });
    }
  }

  // 将props中所有的事件处理函数映射并保存
  getEventHandleFromProps() {
    const propNames = Object.keys(this.props);
    const eventHandle = propNames.filter(prop => /^on+/.test(prop));

    const eventDict = {};
    eventHandle.forEach((ele) => {
      eventDict[ele] = ele.replace(/^on[A-Z]/g, s => s.slice(2).toLowerCase());
    });

    return eventDict;
  }

  renderCodeMirror() {
    // 生成codemirror实例
    this.editor = CodeMirror.fromTextArea(this.textarea, this.props.options);
    // 获取CodeMirror用于获取其中的一些常量
    this.codemirror = CodeMirror;
    // 事件处理映射
    const eventDict = this.getEventHandleFromProps();

    Object.keys(eventDict).forEach((event) => {
      this.editor.on(eventDict[event], this.props[event]);
    });

    const { value, width, height } = this.props;
    // 初始化值
    this.editor.setValue(value || '');

    if (width || height) {
      // 设置尺寸
      this.editor.setSize(width, height);
    }
  }

  render() {
    return (
      <textarea ref={(instance) => { this.textarea = instance; }} />
    );
  }
}

ReactCodeMirror.defaultProps = {
  value: '',
  options: {},
  width: '100%',
  height: '100%',
};

ReactCodeMirror.propTypes = {
  value: PropTypes.string,
  options: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
/* eslint-enable */
