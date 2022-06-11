import React from "react";
import washing from "../../Assests/Images/Image/washing.png";
const SkinCarebanner = () => {
  return (
    <div className="py-24 bg-neutral">
      <div class="container ">
        <div class="flex flex-col md:items-center lg:items-start lg:flex-row">
          <div className="flex-1">
            <img
              src={washing}
              alt=""
              class="w-full md:w-[560px] h-auto md:h-[360px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1  md:ml-[-200px] lg:ml-0  mt-7 lg:mt-0">
            <div className=" lg:pl-24 ">
              <h1 class="text-[34px] font-semibold mb-5">
                <p>Let us handle your </p>{" "}
                <p className="mt-[-12px]">
                  screen <span className="text-primary">Professionally</span> .
                </p>
              </h1>
              <p class=" text-[14px] text-gray-500 font-light">
                With well written codes, we build amazing apps for all <br />
                platforms, mobile and web apps in general ipsum. <br /> Lorem
                ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus
                commodo ipsum.
              </p>
              <div className="flex items-center justify-center lg:justify-between lg:w-5/6  mt-6 lg:mt-14">
                <div className="flex-1">
                  <h1 className="text-primary text-[42px] font-bold">500+</h1>
                  <p className="mt-3">Happy Customer</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-primary text-[42px] font-bold">16+</h1>
                  <p className="mt-3">Total Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinCarebanner;
