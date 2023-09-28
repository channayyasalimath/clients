import React from 'react';
import './Dashboard.css';
import Sidebar from '../Dashboard/Components/SideBar Section/SideBar';
import Body from '../Dashboard/Components/Body Section/Body';
import { Link, Outlet } from 'react-router-dom'


function Dashboard() {
  return (
    <div className='dashboard flex'>
        <div className='dashboardContainer flex'>
            <Sidebar />
            <Body />
        </div>
        <Outlet />
    </div>
  )
}

export default Dashboard