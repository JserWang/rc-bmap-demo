import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import throttle from 'lodash.throttle';
import menuData from './menuData';
import styles from './index.css';

const {
  Sider: AntdSider,
} = Layout;

const { SubMenu, Item: MenuItem } = Menu;

const MIN_MENU_WIDTH = 260;// 菜单最小宽度
const MAX_MENU_WIDTH = 400;// 菜单最大宽度
const menuNodePaths = menuData.map(item => item.path);
const mainPath = /^\/\w*/;

class Sider extends Component {
  constructor() {
    super();
    const defaultSelectedKeys = `${window.location.pathname}` === '/' ? ['/map/show'] : [`${window.location.pathname}`];
    const openKeys = menuNodePaths.filter(
      item => item === mainPath.exec(defaultSelectedKeys[0])[0],
    );
    this.state = {
      siderWidth: MIN_MENU_WIDTH,
      openKeys,
      defaultSelectedKeys,
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
    this.currentClientX = (e || window.event).clientX;
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
  }

  onOpenChange = (keys) => {
    const { openKeys } = this.state;
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (menuNodePaths.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys: keys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    const { siderWidth, openKeys, defaultSelectedKeys } = this.state;
    return (
      <AntdSider
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
          <Icon type={siderWidth === 0 ? 'right' : 'left'} />
        </div>
        <div className={styles.side}>
          <Menu
            mode="inline"
            openKeys={openKeys}
            defaultSelectedKeys={defaultSelectedKeys}
            onOpenChange={this.onOpenChange}
          >
            {
              menuData.map(item => (
                <SubMenu
                  title={item.text}
                  key={item.path}
                >
                  {
                    item.children.map((child) => {
                      const key = `${item.path}${child.path}`;
                      return (
                        <MenuItem key={key}>
                          <Link to={key}>
                            {child.text}
                          </Link>
                        </MenuItem>
                      );
                    })
                  }
                </SubMenu>
              ))
            }
          </Menu>
        </div>
      </AntdSider>
    );
  }
}

export default Sider;
