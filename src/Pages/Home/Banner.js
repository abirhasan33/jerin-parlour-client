import React from "react";
import headerImg from "../../Assests/Images/Image/header.png";
import Navber from "../../Shared/Navber";
const Banner = () => {
  return (
    <div className=" pb-3 bg-neutral">
      <Navber></Navber>
      <div className="flex items-center  flex-col md:flex-col-reverse lg:flex-row justify-center h-full lg:h-[65vh] pt-5 md:pt-10  container">
        <div className="  md:text-center lg:text-left">
          {" "}
          <div className="space-y-2 lg:mt-0 md:mt-5   md:space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold text-[#111430]">
              BEAUTY SALON
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold text-[#111430]">
              FOR EVERY WOMEN
            </h1>
          </div>
          <p className="text-gray-500 w-5/6 md:mx-auto lg:mx-0 xl:w-4/6  mt-4 md:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <button className="px-8 my-4 md:my-7   rounded py-3 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white">
            Get an Appointment
          </button>
        </div>
        <div className="w-full md:w-5/12 ">
          <img
            className=" h-full w-full block "
            src={headerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
