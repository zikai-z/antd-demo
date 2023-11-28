import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import SimpleLineChart from './components/SimpleLineChart';
import LoginForm from './components/LoginForm';
import Report from './components/Report';
import ChartsPage from './components/ChartsPage'; 
import Dashboard from './components/Dashboard';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/login">登录</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/report">报告</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/charts">图表</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/report" element={<Report />} />
              <Route path="/charts" element={<ChartsPage />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design</Footer>
      </Layout>
    </Router>
  );
}

export default App;
