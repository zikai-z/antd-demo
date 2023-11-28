import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
];

const PieChartComponent = () => (
  <PieChart width={400} height={400}>
    <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
    <Tooltip />
    <Legend />
  </PieChart>
);

export default PieChartComponent;
