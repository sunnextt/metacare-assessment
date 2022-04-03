import React from 'react';
import BellLogo from '../../assets/svg/bell.svg';
import downArrow from '../../assets/svg/downArrow.svg';
import styled from 'styled-components';
import { Divider } from 'antd';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.78rem 1.1rem;
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 8px;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  @media only screen and (max-width: 768px) {
    gap: 1rem;
    padding: 0.5rem 1.1rem;
  }

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

  .circle {
    border-radius: 50%;
    border: 1px solid #6837ef;
  }

  h6 {
    font-size: 0.9rem;
    padding: 0px 0.8rem;
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
        <div className="circle">
          <h6>MA</h6>
        </div>
        <img src={downArrow} alt="downArrow" />
      </Avater>
    </Div>
  );
};

export default Nofication;
