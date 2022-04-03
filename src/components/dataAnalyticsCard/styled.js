import styled from 'styled-components';
import { Row as _Row } from 'antd';

const CAnalitic = styled.div``;

export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Cdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
export const Title = styled.h6`
  font-family: 'Gelion Semi Bold';
  font-size: 24px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Cbutton = styled.button`
  border: none;
  padding: 10px, 16px, 10px, 16px;
  background: #25bb87;
  border-radius: 8px;
  color: #fff;
  width: 105px;
`;

export const CRow = styled(_Row)`
  margin: 2rem 0;
`;
export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border: 1px solid #ecebf5;
  padding: 1.4rem;

  @media only screen and (max-width: 768px) {
    justify-content: start;
    flex-wrap: wrap;
    gap: 1rem
  }

  .flex_row {
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 1.2rem;
  }
  .content_header_div {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Inter;
      font-size: 12px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0em;
      background-color: red;
      color: #25bb87;
      background: rgba(37, 187, 135, 0.1);
      border-radius: 4px;
      padding: 0.4rem;
    }
  }

  h4 {
    font-family: 'Gelion bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
  }

  .priority_text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Gelion Medium';
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
  }

  .priority_box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .priority_color {
      height: 10px;
      width: 10px;
      left: 0px;
      top: 6px;
      border-radius: 2px;
      background: #f05d23;
    }
  }
`;

export const ResponseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #ecebf5;
  padding: 1.4rem;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
export const CCard = styled.div`
  padding: 26px 14px;
  background: #fafafa;
  border: 1px solid #ecebf5;
  border-radius: 10px;
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const CardText = styled.h6`
  font-family: 'Gelion regular';
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: #696d8c;
  margin: 0.5rem 0;
`;
export const CardTextH3 = styled.h3`
  font-family: 'Gelion Semi Bold';
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #696d8c;
`;

export default CAnalitic;
