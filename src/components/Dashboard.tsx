import React from 'react';
import { Row, Col, Card, Statistic, Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import LineChartComponent from './LineChartComponent';

const Dashboard = () => {
  // 模拟数据
  const tableData = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
    // ...更多数据
  ];

  const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '地址', dataIndex: 'address', key: 'address' },
  ];

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="用户数量"
              value={1128}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="人"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="销售额"
              value={9300}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="元"
            />
          </Card>
        </Col>
        {/* 可以添加更多卡片 */}
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="销售趋势">
            <LineChartComponent />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="用户列表">
            <Table dataSource={tableData} columns={columns} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
