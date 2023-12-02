import React from 'react'
import { Outlet } from 'react-router-dom';
import Navlinks from './Navlinks';
import Header from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

const MainLayout = () => {
  return (
    <div>
        {/* <Navlinks /> */}
        <Header/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout;