import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/dashboard/booking/${_id}`)}
      className={` even:bg-white even:drop-shadow-2xl md:even:drop-shadow-0 lg:even:drop-shadow-2xl  w-[350px] h-[300px] md:w-[370px] md:h-[317px] odd:hover:shadow-xl hover:transition-all hover:ease-in-out hover:duration-300  cursor-pointer  rounded-xl flex flex-col justify-center items-center`}
    >
      <img src={img} className="w-[72px] h-[72px]" alt="" />
      <h2 className="mt-4 mb-1 font-semibold text-accent">{name}</h2>
      <h2 className="text-primary mb-2">${price}</h2>
      <p className="px-7 text-center  text-gray-500 font-light">
        {description}
      </p>
    </div>
  );
};

export default Service;
