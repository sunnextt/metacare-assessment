import Layout from './style';
import ASide from './Sider.js';
import MainHeader from './Header';
import { useState } from 'react';
const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [Breakpoint, setBreakpoint] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onBreakpoint = (broken) => {
    setBreakpoint(broken);
  };

  return (
    <Layout>
      <ASide collapsed={collapsed} onCollapse={onCollapse} onBreakpoint={onBreakpoint} />
      <Layout>
        <MainHeader toggle={toggle} collapsed={collapsed} breakpoint={Breakpoint} />
        <Content style={{ margin: '0 40px' }}>
          <div className="site_layout_background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
