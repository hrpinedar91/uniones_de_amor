import React from "react";

interface Props {
  name: string;
  country: string;
  description: string;
}

const CardTestimonio = ({ name, country, description }: Props) => {
  return (
    <div className="bg-[#045757] shadow-lg rounded-lg p-6 h-full text-white cardTestimonio">
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <h2 className="text-lg font-bold mb-2">{name}</h2>
          <span className="w-5 h-5 rounded-full bg-white"></span>
        </div>
        <hr></hr>
      </div>
      <div className="h-fit">
        <p className="text-gray-500 mb-2">{country}</p>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardTestimonio;
