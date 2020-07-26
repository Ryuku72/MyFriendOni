import React from "react";
import "./style.css";

function Footer(props) {
  const bgColor = props.style ? "bg-orange-400 border-t-8 border-orange-500" : "bg-gray-300"

  return (
    <footer className={`w-full relative flex justify-between my-auto mt-auto mb-0 items-center  p-6 footer ${bgColor}`}>
      <article>
        {props.children}
      </article>
      <>
      <p className="footer mr-4 text-blue-800 text-right flex items-center"><span className="mr-4 text-pink-600 capitalize ">{props.user}</span>{'//'} Foreign Toolkit 2020 </p>
      </>
    </footer>
  );
}

export default Footer;