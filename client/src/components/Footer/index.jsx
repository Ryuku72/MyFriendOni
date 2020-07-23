import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer className="w-full flex justify-between my-auto mt-auto mb-0 items-center bg-gray-300 p-6 footer">
      {props.children}
  <>
  <p className="footer mr-8 text-blue-800 text-right flex items-center"><span className="mr-6 text-pink-600 capitalize">{props.user}</span>{'//'} Foreign Toolkit 2020 </p>
  </>
    </footer>
  );
}

export default Footer;