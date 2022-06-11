import React, { useEffect, useState } from "react";
import img1 from "../../Assests/Images/Icon/img-1.png";
import img2 from "../../Assests/Images/Icon/img-2.png";
import img3 from "../../Assests/Images/Icon/img-3.png";
import Service from "./Service";
const AwesomeServices = () => {
  // const [services,setServices]=useState([])
  // useEffect(() => {
  //   fetch('http://localhost:4000/services').then(res=>res.json()).then(data=>setServices(data))
  // },[])
  const services = [
    {
      id: 1,

      name: "Anti Age Face Treatment",

      img: img1,

      price: 199,

      description:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    },

    {
      id: 2,

      name: "Hair Color & Styleing",

      img: img2,

      price: 99,

      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out",
    },

    {
      id: 3,

      name: "Skin Care Treatment",

      img: img3,

      price: 299,

      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    },
  ];
  return (
    <div className="py-16 bg-base-100">
      <h1 className="text-center text-accent font-bold text-2xl mb-16 ">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container justify-items-center">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>

      <button className="px-8 mt-16 block mx-auto  rounded py-3 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white">
        Explore more
      </button>
    </div>
  );
};

export default AwesomeServices;
