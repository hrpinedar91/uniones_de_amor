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
          href="https://api.whatsapp.com/send?phone=+3248267662&text=Hola,%20me%20gustar%C3%ADa%20saber%20si%20puedes%20ayudarme%20con%20un%20problema%20amoroso.%20He%20le%C3%ADdo%20que%20eres%20experto%20en%20uniones%20de%20amor%20y%20me%20gustar%C3%ADa%20hacer%20uno%20para%20recuperar%20a%20mi%20ex%20pareja.%20%C2%BFQu%C3%A9%20necesito%20para%20hacerlo?%20%C2%BFQu%C3%A9%20garant%C3%ADas%20me%20ofreces?%20%C2%BFCu%C3%A1nto%20cuesta%20tu%20servicio?%20Espero%20tu%20respuesta,%20gracias.%20%F0%9F%98%8A"
          className="btn bg-[#044343] text-white my-3 mr-14"
        >
          Consulta Gratis
        </a>
      </div>
    </div>
  );
};
