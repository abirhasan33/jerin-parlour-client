import React from "react";
import Footer from "../Shared/Footer";
import Navber from "../Shared/Navber";

const ContactUs = () => {
  return (
    <div>
      <Navber />
      <div className="bg-secondary h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Contact page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
