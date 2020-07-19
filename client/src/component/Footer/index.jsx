import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer className="w-full flex justify-between my-auto mt-auto mb-0 items-center bg-gray-300 p-6 footer">
      {props.children}
  <>
  <span className="text-4xl mr-8 text-blue-800 text-right"><i className="fas fa-dungeon"><span className="mr-3 text-4xl text-green-500 capitalize">{props.user}</span></i> {'//'} Foreign Toolkit 2020 </span>
  </>
    </footer>
  );
}

export default Footer;