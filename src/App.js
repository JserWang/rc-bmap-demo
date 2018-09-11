import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import menuData from './menuData';
import route from './router';

const {
  Content, Sider,
} = Layout;

const { SubMenu } = Menu;

const MIN_MENU_WIDTH = 200;// 菜单最小宽度
const MAX_MENU_WIDTH = 400;// 菜单最大宽度
let menuWidth = 200;

class App extends Component {
  componentDidMount() {
    this.right = document.getElementById('right');
    this.toggleBtn = document.getElementById('toggleBtn');
    this.isOpen = true;
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    const menuCurrentwidth = this.menu.clientWidth;// 菜单宽度
    const currentClientX = e.clientX || window.event.clientX;// 记录x坐标
    document.onmousemove = () => {
      const clientX = e.clientX || window.event.clientX;
      const dragWidth = clientX - currentClientX;// 拖拽距离
      menuWidth = menuCurrentwidth + dragWidth;
      if (menuWidth < MIN_MENU_WIDTH) {
        menuWidth = MIN_MENU_WIDTH;
      }
      if (menuWidth > MAX_MENU_WIDTH) {
        menuWidth = MAX_MENU_WIDTH;
      }
      this.menu.style.width = `${menuWidth}px`;
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  toggleMenu = () => {
    if (this.isOpen) {
      this.isOpen = false;
      this.menu.style.width = 0;
    } else {
      this.isOpen = true;
      this.menu.style.width = `${menuWidth}px`;
    }
  };

  getMenuNode = (ref) => {
    this.menu = ReactDOM.findDOMNode(ref);
    this.menu.style.maxWidth = `${MAX_MENU_WIDTH}px`;
    this.menu.style.minWidth = 'auto';
    this.menu.style.flex = 'none';
  }

  render() {
    return (
      <Router basename="/examples">
        <Layout>
          <Sider
            ref={this.getMenuNode}
            style={{
              height: '100vh',
              display: 'block',
              flex: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: '0',
                height: '100%',
                width: '10px',
                cursor: 'col-resize',
                zIndex: '99',
              }}
              onMouseDown={this.handleMouseDown}
            />
            <div
              id="toggleBtn"
              style={{
                position: 'absolute',
                right: '-10px',
                height: '40px',
                width: '12px',
                background: '#001529',
                top: '50%',
                marginTop: '-20px',
                zIndex: '99',
              }}
              onClick={this.toggleMenu}
              onKeyDown={this.toggleMenu}
            >
              <Icon
                type="left"
                style={{
                  color: 'white',
                  marginTop: '13px',
                }}
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
          <Layout id="right" style={{ overflow: 'hidden', height: '100vh' }}>
            <Content>
              { route() }
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

// const App = () => (
//   <Router basename="/examples">
//     <Layout>
//       <Sider
//         id="menu"
//         ref={getMenuNode}
//         style={{
//           overflow: 'auto',
//           height: '100vh',
//           position: 'fixed',
//           left: 0,
//           maxWidth: '400px',
//           minWidth: '200px',
//         }}
//       >
//         <div
//           style={{
//             position: 'absolute',
//             right: '0',
//             height: '100%',
//             width: '10px',
//             cursor: 'col-resize',
//             background: 'red',
//             zIndex: '99',
//           }}
//           onMouseDown={handleMouseDown}
//         />
//         <Menu theme="dark" mode="inline">
//           {
//             menuData.map((item, index) => (
//               <SubMenu
//                 title={item.text}
//                 key={index}
//               >
//                 {
//                   item.children.map((child, idx) => (
//                     <Menu.Item key={`${index}_${idx}`}>
//                       <Link to={child.path}>
//                         {child.text}
//                       </Link>
//                     </Menu.Item>
//                   ))
//                 }
//               </SubMenu>
//             ))
//           }
//         </Menu>
//       </Sider>
//       <Layout id="right" style={{ marginLeft: 200, overflow: 'hidden', height: '100vh' }}>
//         <Content>
//           <div
//             id="toggleBtn"
//             style={{
//               position: 'absolute',
//               left: '200px',
//               height: '40px',
//               width: '10px',
//               background: 'red',
//               top: '50%',
//               marginTop: '-20px',
//               zIndex: '99999',
//             }}
//             onClick={() => {}}
//             onKeyDown={toggleMenu}
//           />
//           { route() }
//         </Content>
//       </Layout>
//     </Layout>
//   </Router>
// );
export default App;
