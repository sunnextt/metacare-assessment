import Layout from './style';
import ASide from './Sider.js';
import MainHeader from './Header';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
const { Content } = Layout;

const MainLayout = ({ children }) => {
  const matches = useMediaQuery('(max-width: 992px)');

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
      <Layout style={{ width: '100%' }}>
        <MainHeader toggle={toggle} collapsed={collapsed} breakpoint={Breakpoint} />
        <Content style={{ margin: matches ? '0' : '0 40px' }}>
          <div className="site_layout_background" style={{ padding: matches ? '1rem' : '24px', minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
