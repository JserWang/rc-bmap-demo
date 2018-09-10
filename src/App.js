import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import menuData from './menuData';
import route from './router';

const {
  Content, Sider,
} = Layout;

const { SubMenu } = Menu;

const MIN_MENU_WIDTH = 200;// 菜单最小宽度
const MAX_MENU_WIDTH = 400;// 菜单最大宽度
let menuWidth = 200;
const handleMouseUp = () => {
  document.onmousemove = null;
  document.onmouseup = null;
};

const handleMouseDown = (e) => {
  const menu = document.getElementById('menu');
  const right = document.getElementById('right');
  const menuCurrentwidth = menu.clientWidth;// 菜单宽度
  const currentClientX = e.clientX || window.event.clientX;// 记录x坐标
  document.onmousemove = () => {
    const clientX = e.clientX || window.event.clientX;
    const dragWidth = clientX - currentClientX;// 拖拽距离
    menuWidth = menuCurrentwidth + dragWidth;
    if (menuWidth < MIN_MENU_WIDTH) {
      menuWidth = MIN_MENU_WIDTH;
      document.onmousemove = null;
      document.onmouseup = null;
    }
    if (menuWidth > MAX_MENU_WIDTH) {
      menuWidth = MAX_MENU_WIDTH;
      document.onmousemove = null;
      document.onmouseup = null;
    }
    menu.style.width = `${menuWidth}px`;
    right.style.marginLeft = `${menuWidth}px`;
  };
};

const toggleMenu = () => {
  const menu = document.getElementById('menu');
  const right = document.getElementById('right');
  const toggleBtn = document.getElementById('toggleBtn');
  // menu.style.width = menu.clientWidth === 0 ? menuWidth : 0;
  if (menu.clientWidth === 0) {
    menu.style.width = menuWidth;
    right.style.marginLeft = `${menuWidth}px`;
    toggleBtn.style.left = `${menuWidth}px`;
  } else {
    menu.style.width = 0;
    right.style.marginLeft = 0;
    toggleBtn.style.left = 0;
  }
};

/*eslint-disable*/
const App = () => (
  <Router basename="/examples">
    <Layout>
      <Sider
        id="menu"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          maxWidth: '400px',
          minWidth: '200px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '0',
            height: '100%',
            width: '10px',
            cursor: 'col-resize',
            background: 'red',
            zIndex: '99',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
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
      <Layout id="right" style={{ marginLeft: 200, overflow: 'hidden', height: '100vh' }}>
        <Content>
        <div
          id="toggleBtn"
          style={{
            position: 'absolute',
            left: '200px',
            height: '40px',
            width: '10px',
            background: 'red',
            top: '50%',
            marginTop: '-20px',
            zIndex: '99999',
          }}
          onClick={toggleMenu}
        />
          { route() }
        </Content>
      </Layout>
    </Layout>
  </Router>
);
  /*eslint-disable*/
export default App;
