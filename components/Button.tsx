import Image from "next/image";
import React from "react";
import Icon from "./Icon";

interface Props {
  children: React.ReactNode;
  bg: string;
}

const Button = ({ children, bg }: Props) => {
  return (
    <button
      className={`btn bg-[#${bg}] hover:bg-[#E4E4E4] hover:text-[#044343] text-white w-full`}
    >
      {children}
      <Icon />
    </button>
  );
};

export default Button;
