import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="max-w-sm rounded-2xl h-full bg-[#045757] overflow-hidden card shadow-lg">
      <Image
        className="w-full h-2/6"
        src={image}
        alt={title}
        width={300}
        height={230}
      />
      <div className="flex flex-col h-4/6 justify-between px-6 p-4">
        <h6 className="font-bold text-lg text-[#E4E4E4] mb-2">{title}</h6>
        <p className="text-[#E4E4E4] text-sm mb-4 text-wrap">{description}</p>
        <Link className="w-full" href="https://wa.link/elzn18">
          <Button bg="222222">Consulta Gratis</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
