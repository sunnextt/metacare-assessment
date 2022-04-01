import React from 'react';
import styled from 'styled-components';

const CMLogo = styled.div`
  padding: 21px 22px;
  background: #ffffff;
  border: 1px solid #ecebf5;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.h6`
  font-family: 'Gelion Bold';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #060213;
`;
const Ctdiv = styled.div``;

const MetaCareLogo = () => {
  const email = 'email@gmail.com';
  return (
    <CMLogo>
      <Ctdiv>
        <LogoText>MetaCare</LogoText>
        <p>{email}</p>
      </Ctdiv>
    </CMLogo>
  );
};

export default MetaCareLogo;
