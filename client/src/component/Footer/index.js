import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer w-full flex flex-col my-auto mt-auto mb-0 w justify-center items-end bg-gray-300 p-2" style={{height:"8vh"}}>
      <span className="text-2xl mr-8 text-blue-800"><i className="fas fa-dungeon"></i> {'//'} Foreign Toolkit 2020 </span>
    </footer>
  );
}

export default Footer;