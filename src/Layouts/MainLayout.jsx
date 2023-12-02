import React from 'react'
import { Outlet } from 'react-router-dom';
import Navlinks from './Navlinks';

const MainLayout = () => {
  return (
    <div>
        <Navlinks />
        <Outlet />
    </div>
  )
}

export default MainLayout;