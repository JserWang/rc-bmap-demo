import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from 'components/Sider';
import route from './router';
import styles from './App.css';

const {
  Content,
} = Layout;

const App = () => (
  <Router>
    <Layout>
      <Sider />
      <Layout className={styles.right}>
        <Content>
          { route() }
        </Content>
      </Layout>
    </Layout>
  </Router>
);

export default App;
