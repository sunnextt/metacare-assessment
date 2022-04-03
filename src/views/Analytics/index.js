import { SearchInputSmall } from '../../components/searchinput';
import React from 'react';
import CAnalitic, { Title, TopHeader, Cdiv, Cbutton } from './style';
import { Select } from 'antd';
import DataAnalyticsCard from 'components/dataAnalyticsCard';

const Efficiency = () => {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  // Average response Time data
  const headerText = 'Average response Time';
  const headerPercentage = '+4.14% ';
  const priority = 'High Priority';
  const priorityColor = '#F05D23';
  const responseRate = 'Average Response Time';
  const responseTime = 'Response Time';
  const Time1 = '30 Mins';
  const Time2 = '1 Hour 30 Mins';

  return (
    <CAnalitic>
      <TopHeader>
        <Title>Efficiency Analytics</Title>
        <Cdiv>
          <SearchInputSmall />
          <Select
            size="large"
            showSearch
            placeholder="Filter Options"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="data1">Data</Option>
          </Select>
          <Cbutton className="btn btn-primary">Export</Cbutton>
        </Cdiv>
      </TopHeader>
      <DataAnalyticsCard
        onChange={onChange}
        headerText={headerText}
        headerPercentage={headerPercentage}
        priority={priority}
        priorityColor={priorityColor}
        cardText1={responseRate}
        cardText2={responseTime}
        time1={Time1}
        time2={Time2}
      />
      <DataAnalyticsCard
        onChange={onChange}
        headerText={'Replies per resolution '}
        headerPercentage={headerPercentage}
        priority={priority}
        priorityColor={'#3E68FF'}
        cardText1={'Average Replies '}
        cardText2={'Response Time'}
        time1={'30 Mins'}
        time2={'1 Hour 30 Mins'}
      />
      <DataAnalyticsCard
        onChange={onChange}
        headerText={headerText}
        headerPercentage={headerPercentage}
        priority={priority}
        priorityColor={priorityColor}
        cardText1={responseRate}
        cardText2={responseTime}
        time1={Time1}
        time2={Time2}
      />
      <DataAnalyticsCard
        onChange={onChange}
        headerText={'First contact resolution rate'}
        headerPercentage={headerPercentage}
        priority={priority}
        priorityColor={'#07C9E2'}
        cardText1={'Average Contact Rate'}
        cardText2={'Response Time'}
        time1={Time1}
        time2={Time2}
      />
    </CAnalitic>
  );
};

export default Efficiency;
