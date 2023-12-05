import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222222] py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Consulta Gratis
        </button> */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} hrpinedar91 Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
