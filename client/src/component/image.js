import React from "react";

function Image(props) {
  return (
    <img 
      className="img-thumbnail thumbs"
      src = {props.value}
      alt=""
    />
  );
}
export default Image;