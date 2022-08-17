import React from 'react'
import { Routes, Route } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import About from './components/About'
import CarContainer from './containers/CarContainer'
import DashboardContainer from './containers/DashboardContainer'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomeContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/car/:id" element={<CarContainer />} />
            <Route path="/dashboard" element={<DashboardContainer />} />
        </Routes>
    );
};

export default Router;