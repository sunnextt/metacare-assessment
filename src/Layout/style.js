import { Layout as _Layout } from 'antd';
import styled from 'styled-components';

const Layout = styled(_Layout)`
  background-color: #fff;
  background: #fff;
  height: 100%;

  .side_layout_background {
    background-color: #fff;
    border: 1px solid #ecebf5;
    padding: 1.5rem;

    @media only screen and (max-width: 993px) {
      padding: 0;
    }
  }
  .site_layout_background {
    background-color: #fff;
    border: 1px solid #ecebf5;
  }

  .trigger {
    font-size: 20px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    position: absolute;
    left: 10px;
    color: #6837ef;

    &:hover {
      color: #ffb400;
    }
  }
`;

export default Layout;
