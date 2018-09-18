import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import throttle from 'lodash.throttle';
import menuData from './menuData';
import route from './router';
import styles from './App.css';

const {
  Content, Sider,
} = Layout;

const { SubMenu } = Menu;

const MIN_MENU_WIDTH = 200;// 菜单最小宽度
const MAX_MENU_WIDTH = 400;// 菜单最大宽度

class App extends Component {
  constructor() {
    super();
    this.state = {
      siderWidth: MIN_MENU_WIDTH,
    };

    this.currentWidth = MIN_MENU_WIDTH;
    this.onDocumentMouseMove = throttle(this.getNewWidth, 16);
  }

  onDocumentMouseUp = () => {
    document.removeEventListener('mousemove', this.onDocumentMouseMove, false);
    document.removeEventListener('mouseup', this.onDocumentMouseUp, false);
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    const { siderWidth } = this.state;
    this.siderWidth = siderWidth;
    this.currentClientX = e.clientX || window.event.clientX;
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    document.addEventListener('mouseup', this.onDocumentMouseUp, false);
  }

  getNewWidth = (e) => {
    if (e || window.event) {
      const event = e || window.event;
      const { clientX } = event;
      let menuWidth = this.siderWidth + clientX - this.currentClientX;
      if (menuWidth < MIN_MENU_WIDTH) {
        menuWidth = MIN_MENU_WIDTH;
      }
      if (menuWidth > MAX_MENU_WIDTH) {
        menuWidth = MAX_MENU_WIDTH;
      }
      this.setState({
        siderWidth: menuWidth,
      });
    }
  }

  toggleMenu = () => {
    const { siderWidth } = this.state;
    if (siderWidth === 0) {
      this.setState({
        siderWidth: this.currentWidth,
      });
    } else {
      this.setState({
        siderWidth: 0,
      });
      this.currentWidth = siderWidth;
    }
  };

  render() {
    const { siderWidth } = this.state;
    return (
      <Router basename="/examples">
        <Layout>
          <Sider
            width={siderWidth}
          >
            <div
              className={styles.splitLine}
              onMouseDown={this.handleMouseDown}
            />
            <div
              className={styles.toggleBtn}
              onClick={this.toggleMenu}
            >
              <Icon
                type={siderWidth === 0 ? 'right' : 'left'}
                className={styles.arrow}
              />
            </div>
            <Menu theme="dark" mode="inline">
              {
                menuData.map((item, index) => (
                  <SubMenu
                    title={item.text}
                    key={index}
                  >
                    {
                      item.children.map((child, idx) => (
                        <Menu.Item key={`${index}_${idx}`}>
                          <Link to={child.path}>
                            {child.text}
                          </Link>
                        </Menu.Item>
                      ))
                    }
                  </SubMenu>
                ))
              }
            </Menu>
          </Sider>
          <Layout className={styles.right}>
            <Content>
              { route() }
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
