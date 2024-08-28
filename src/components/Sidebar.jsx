import React from 'react'
// import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="dashboard-sidebar">
            <ul>
                <li>
                    <img src="icon1.png" alt="Dashboard" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <img src="icon2.png" alt="Sales" />
                    <span>Sales</span>
                </li>
                <li>
                    <img src="icon3.png" alt="Orders" />
                    <span>Orders</span>
                </li>
                <li>
                    <img src="icon1.png" alt="Returns" />
                    <span>Returns</span>
                </li><li>
                    <img src="icon1.png" alt="Coustomers" />
                    <span>Coustomers</span>
                </li>
                <li>
                    <img src="icon1.png" alt="Shipping" />
                    <span>Shipping</span>
                </li>
                <li>
                    <img src="icon1.png" alt="Channel" />
                    <span>Channel</span>
                </li>
                <li>
                    <img src="icon1.png" alt="Integration" />
                    <span>Integration</span>
                </li>
                <li>
                    <img src="icon1.png" alt="Calculator" />
                    <span>Calculator</span>
                </li>
                <li>
                    <img src="icon1.png" alt="Report" />
                    <span>Report</span>
                </li>
                <li>
                    <img src="icon1.png" alt="Account" />
                    <span>Account</span>
                </li>
                {/* Add more sidebar items as needed */}
            </ul>
        </div>
      );
    }

