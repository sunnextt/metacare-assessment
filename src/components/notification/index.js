import React from 'react';
import BellLogo from '../../assets/svg/bell.svg';
import downArrow from '../../assets/svg/downArrow.svg';
import styled from 'styled-components';
import { Divider } from 'antd';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 16px;
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 8px;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  span {
    background: #f25a68;
    border-radius: 4px;
    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      color: #fff;
      padding: 1px 5px;
    }
  }
`;

const AlertDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 100%;
  }
`;

const Avater = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  h6 {
    font-size: 12px;
    padding: 0px 7px;
    border-radius: 50%;
    border: 1px solid #6837ef;
  }

  img {
  }
`;

const Nofication = () => {
  return (
    <Div>
      <AlertDiv>
        <img src={BellLogo} alt="Bell" />
        <span>
          <p>3</p>
        </span>
      </AlertDiv>
      <Divider type="vertical" style={{ height: '30px' }} />
      <Avater>
        <h6>MA</h6>
        <img src={downArrow} alt="downArrow" />
      </Avater>
    </Div>
  );
};

export default Nofication;
