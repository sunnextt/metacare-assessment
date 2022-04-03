import React from 'react';
import { CRow, HeaderBox, ResponseDiv, CardText, CardTextH3, CCard } from './styled';
import { Card, Col, Row, Divider, DatePicker } from 'antd';
import LineChart from 'components/chart';

const DataAnalyticsCard = ({
  onChange,
  headerText,
  headerPercentage,
  priority,
  priorityColor,
  cardText1,
  cardText2,
  time1,
  time2,
}) => {
  return (
    <CRow>
      <Col span={24}>
        <Row>
          <Col xs={24 } md={17} lg={18}>
            <HeaderBox>
              <div className="flex_row content_header_div">
                <h4 className="header_text">{headerText}</h4>
                <span className="header_span_text">{headerPercentage}</span>
              </div>
              <div className="flex_row">
                <div className="priority_box">
                  <div className="priority_color" style={{ background: priorityColor }}></div>
                  <h6 className="priority_text">{priority}</h6>
                </div>
                <div>
                  <Divider type="vertical" style={{ height: '30px' }} />
                </div>
                <DatePicker onChange={onChange} />
              </div>
            </HeaderBox>
            <Card>
              <LineChart />
            </Card>
          </Col>
          <Col xs={24}  md={7} lg={6}>
            <ResponseDiv>
              <CCard>
                <CardText>{cardText1}</CardText>
                <CardTextH3>{time1}</CardTextH3>
              </CCard>
              <CCard>
                <CardText>{cardText2}</CardText>
                <CardTextH3>{time2}</CardTextH3>
              </CCard>
            </ResponseDiv>
          </Col>
        </Row>
      </Col>
    </CRow>
  );
};

export default DataAnalyticsCard;
