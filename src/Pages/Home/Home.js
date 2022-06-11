import React from 'react';
import Footer from '../../Shared/Footer';
import AwesomeServices from './AwesomeServices';
import Banner from './Banner';
import SkinCarebanner from './SkinCarebanner';
import StayConnected from './StayConnected';

import Testimonials from './Testimonials'
const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <AwesomeServices />
            <SkinCarebanner />
            <Testimonials/>
            <StayConnected />
            <Footer/>

        </div>
    );
};

export default Home;