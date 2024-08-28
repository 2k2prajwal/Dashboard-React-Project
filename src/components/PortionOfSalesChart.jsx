import React from 'react'
import { PieChart, Pie, Tooltip, Cell,  } from 'recharts';
import {ResponsiveContainer} from 'recharts'




  const data = [
    { name: 'WooCommerce', value: 1550 },
    { name: 'Shopify', value: 1209 },
  ];

  const COLORS = ['#FF6F61', '#00C49F'];


export default function PortionOfSalesChart() {
    return (
        
        <div className="portion-of-sales-chart">
            <h4>Portion of Sales</h4>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className={`pie-${entry.name.toLowerCase().replace(' ', '-')}`} />
                    ))}
                </Pie>
                <Tooltip wrapperClassName="recharts-tooltip-wrapper" />
            </PieChart>
        </ResponsiveContainer>
    </div>
    );
}
