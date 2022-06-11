import React from "react";

const StayConnected = () => {
  return (
    <div className="bg-neutral py-10">
      <div className="md:w-5/12 px-4 md:px-0  mx-auto ">
        <h1 className="text-center text-[34px] pt-5 font-bold  uppercase text-gray-700">
         Stay connected with us
        </h1>
     
      
        <div className=" mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              class="input w-full py-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              class="input w-full py-5"
            />

            <input
              type="text"
              placeholder="Email Address"
              class="input w-full py-5"
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input w-full py-5"
            />
          </div>

          <textarea
            class="textarea w-full pb-20 mt-6"
            placeholder="Your Message"
          ></textarea>
          <button className="px-8 mt-8 block mx-auto  rounded py-3 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
