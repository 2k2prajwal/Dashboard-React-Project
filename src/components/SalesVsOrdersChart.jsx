import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';


const data = [
    {
      name: '6/30/2024 - 7/6/2024', orders: 4, sales: 1600, avgOrderValue: 351,
    },
    {
      name: '7/7/2024 - 7/13/2024', orders: 2, sales: 1200, avgOrderValue: 351,
    },
    {
      name: '7/14/2024 - 7/20/2024', orders: 2, sales: 1000, avgOrderValue: 351,
    },
    {
      name: '7/21/2024 - 7/27/2024', orders: 1, sales: 800, avgOrderValue: 351,
    },
  ];

export default function SalesVsOrdersChart() {
  return (
    <div className="sales-vs-orders-chart">
            <h4>Portion of Sales</h4>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#ff7300" />
          <Line type="monotone" dataKey="sales" stroke="#387908" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

