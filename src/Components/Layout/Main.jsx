import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <dev>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </dev>
    );
};

export default Main;