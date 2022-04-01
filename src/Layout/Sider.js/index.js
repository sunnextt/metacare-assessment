import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MetaCareLogo from '../Header/authLogo';
const { Sider } = Layout;
const { SubMenu } = Menu;

const ASide = ({ collapsed, onCollapse, onBreakpoint }) => {
  const [key, setKey] = useState();

  return (
    <Sider
      width={262}
      trigger={null}
      breakpoint="lg"
      collapsed={collapsed}
      collapsedWidth="0"
      className="side_layout_background"
      onBreakpoint={onBreakpoint}
      onCollapse={onCollapse}
    >
      <div style={{ marginBottom: '2rem' }}>
        <MetaCareLogo />
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={[key]}>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Admin" onClick={() => setKey('sub1')}>
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Train SAM" onClick={() => setKey('sub2')}>
          <Menu.Item key="3">option1</Menu.Item>
          <Menu.Item key="4">option2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<UserOutlined />} title="Agent Inbox" onClick={() => setKey('sub3')}>
          <Menu.Item key="5">option1</Menu.Item>
          <Menu.Item key="6">option2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<UserOutlined />} title="Help Center" onClick={() => setKey('sub4')}>
          <Menu.Item key="7">option1</Menu.Item>
          <Menu.Item key="8">option2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<UserOutlined />} title="Analytics" onClick={() => setKey('sub5')}>
          <Menu.Item key="9">Teams</Menu.Item>
          <Menu.Item key="10">Knowledge Base</Menu.Item>
          <Menu.Item key="11">Training SAM</Menu.Item>
          <Menu.Item key="12">Help Center</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default ASide;
