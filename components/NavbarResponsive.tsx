"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center md:w-full md:justify-between">
            <div className="flex-shrink-0">
              {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
              <div className="flex items-center gap-4">
                <Image src={"/avatar.svg"} alt="Logo" width={32} height={32} />
                <span className="font-bold text-white">Unión para siempre</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#servicios"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Servicios
                </Link>
                <Link
                  href="#testimonios"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testimonios
                </Link>

                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href={
                    "https://api.whatsapp.com/send?phone=+3248267662&text=Hola,%20me%20gustar%C3%ADa%20saber%20si%20puedes%20ayudarme%20con%20un%20problema%20amoroso.%20He%20le%C3%ADdo%20que%20eres%20experto%20en%20uniones%20de%20amor%20y%20me%20gustar%C3%ADa%20hacer%20uno%20para%20recuperar%20a%20mi%20ex%20pareja.%20%C2%BFQu%C3%A9%20necesito%20para%20hacerlo?%20%C2%BFQu%C3%A9%20garant%C3%ADas%20me%20ofreces?%20%C2%BFCu%C3%A1nto%20cuesta%20tu%20servicio?%20Espero%20tu%20respuesta,%20gracias.%20%F0%9F%98%8A"
                  }
                >
                  <Button bg="044343">Consulta Gratis</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Servicios
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonios
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacto
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Consulta gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarResponsive;
