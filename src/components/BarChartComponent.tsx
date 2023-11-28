import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '一月', uv: 300, pv: 456 },
  { name: '二月', uv: 145, pv: 230 },
  { name: '三月', uv: 480, pv: 340 },
  // ... 更多数据
];

const BarChartComponent = () => (
  <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="uv" fill="#82ca9d" />
  </BarChart>
);

export default BarChartComponent;
