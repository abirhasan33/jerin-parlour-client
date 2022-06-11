import React from 'react';
import Footer from '../Shared/Footer';
import Navber from '../Shared/Navber';

const Ourteam = () => {
    return (
      <div>
        <Navber/>
        <div className="bg-secondary h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to  Our Team page</h1>
        </div>
        <Footer />
      </div>
    );
};

export default Ourteam;