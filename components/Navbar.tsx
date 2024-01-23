import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-[#222222]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg> */}
            <Image
              src="/avatar.svg"
              width={"20"}
              height={"20"}
              alt="logo principal"
              className="h-5 w-5"
            ></Image>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl p-2 flex place-content-center">
          <Image
            src="/avatar.svg"
            width={"50"}
            height={"50"}
            className="m-2"
            alt="logo principal"
          ></Image>
          Amarres de amor
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Servicios</a>
          </li>
          <li>
            <a>Testimonios</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://wa.me/573248267662?text=Hola.%20Podrias%20ayudarme%20con%20una%20consulta."
          className="btn bg-[#044343] text-white my-3 mr-14"
        >
          Consultar
        </a>
      </div>
    </div>
  );
};
