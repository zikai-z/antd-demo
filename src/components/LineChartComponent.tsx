import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '一月', uv: 400, pv: 240, amt: 240 },
  { name: '二月', uv: 300, pv: 139, amt: 221 },
  { name: '三月', uv: 200, pv: 980, amt: 229 },
  // ... 更多数据
];

const LineChartComponent = () => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
);

export default LineChartComponent;
