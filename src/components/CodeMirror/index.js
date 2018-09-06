import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import isEqual from 'lodash.isequal';

require('codemirror/lib/codemirror.css');

function normalizeLineEndings(str) {
  if (!str) return str;
  return str.replace(/\r\n|\r/g, '\n');
}

class CodeMirror extends Component {
  static defaultProps = {
    preserveScrollPosition: false,
  }

  componentWillMount() {
    this.componentWillReceiveProps = debounce(this.componentWillReceiveProps, 0);
  }

  componentDidMount() {
    const { options, value, defaultValue } = this.props;
    const codeMirrorInstance = this.getCodeMirrorInstance();
    this.codeMirror = codeMirrorInstance.fromTextArea(this.textareaNode, options);
    this.codeMirror.on('change', this.codemirrorValueChanged);
    this.codeMirror.on('cursorActivity', this.cursorActivity);
    this.codeMirror.on('focus', this.focusChanged.bind(this, true));
    this.codeMirror.on('blur', this.focusChanged.bind(this, false));
    this.codeMirror.on('scroll', this.scrollChanged);
    this.codeMirror.setValue(defaultValue || value || '');
  }

  componentWillReceiveProps(nextProps) {
    const { value, preserveScrollPosition } = this.props;

    if (this.codeMirror && nextProps.value !== undefined && nextProps.value !== value
      && normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)
    ) {
      if (preserveScrollPosition) {
        const prevScrollPosition = this.codeMirror.getScrollInfo();
        this.codeMirror.setValue(nextProps.value);
        this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
      } else {
        this.codeMirror.setValue(nextProps.value);
      }
    }
    if (typeof nextProps.options === 'object') {
      for (let i = 0; i < nextProps.options.length; i += 1) {
        const optionName = nextProps.options[i];
        if (nextProps.options.hasOwnProperty(optionName)) {
          this.setOptionIfChanged(optionName, nextProps.options[optionName]);
        }
      }
    }
  }

  componentWillUnmount() {
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }

  getCodeMirrorInstance = () => {
    const { codeMirrorInstance } = this.props;
    return codeMirrorInstance || require('codemirror');
  }

  setOptionIfChanged = (optionName, newValue) => {
    const oldValue = this.codeMirror.getOption(optionName);
    if (!isEqual(oldValue, newValue)) {
      this.codeMirror.setOption(optionName, newValue);
    }
  }

  getCodeMirror = () => this.codeMirror

  getTextareaNode = (ref) => {
    this.textareaNode = ref;
  }

  focusChanged = (focused) => {
    this.setState({
      isFocused: focused,
    });
    const { onFocusChange } = this.props;
    if (onFocusChange) {
      onFocusChange(focused);
    }
  }

  cursorActivity = (cm) => {
    const { onCursorActivity } = this.props;
    if (onCursorActivity) {
      onCursorActivity(cm);
    }
  }

  scrollChanged = (cm) => {
    const { onScroll } = this.props;
    if (onScroll) {
      onScroll(cm.getScrollInfo());
    }
  }

  codemirrorValueChanged = (doc, change) => {
    const { onChange } = this.props;
    if (onChange && change.origin !== 'setValue') {
      onChange(doc.getValue(), change);
    }
  }

  render() {
    const {
      name, path, value, autoFocus,
    } = this.props;
    return (
      <div style={{ height: '100%' }}>
        <textarea
          ref={this.getTextareaNode}
          name={name || path}
          defaultValue={value}
          autoComplete="off"
          autoFocus={autoFocus}
        />
      </div>
    );
  }
}

module.exports = CodeMirror;
