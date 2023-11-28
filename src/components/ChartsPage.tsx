import React from 'react';
import { Row, Col, Typography } from 'antd';
import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';

const { Title } = Typography;

const ChartsPage = () => (
  <div>
    <Title level={2} style={{ textAlign: 'center' }}>图表展示</Title>
    <Row gutter={16}>
      <Col span={24}>
        <Title level={4}>折线图</Title>
        <LineChartComponent />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={24}>
        <Title level={4}>条形图</Title>
        <BarChartComponent />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={24}>
        <Title level={4}>饼图</Title>
        <PieChartComponent />
      </Col>
    </Row>
  </div>
);

export default ChartsPage;
