import React from 'react'
import Header from '../Components/Header'
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Button } from 'primereact/button';
import HomeContent from '../Components/HomeContent';
import Footer from '../Components/Footer';
import AboutUs from '../Components/About';
import CoreTeam from '../Components/CoreTeam';
import ServicesSection from '../Components/ServicesSection';
import Stats from '../Components/Stats';
        

const HomeScreen = () => {
  return (
    <div>
        <Header />
        <HomeContent />
        <ServicesSection />
        <Stats />
        <CoreTeam />
        {/* <AboutUs /> */}
        <Footer />
        {/* <Button label="Submit" /> */}

    </div>
  )
}

export default HomeScreen