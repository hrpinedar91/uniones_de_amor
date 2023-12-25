import Image from "next/image";
import React from "react";
import Icon from "./Icon";

interface Props {
  children: React.ReactNode;
  bg: string;
  id: string;
}

const Button = ({ children, bg, id }: Props) => {
  return (
    <button
      id={id}
      className={`btn bg-[#${bg}] hover:bg-[#E4E4E4] hover:text-[#044343] text-white w-full`}
    >
      {children}
      <Icon />
    </button>
  );
};

export default Button;
