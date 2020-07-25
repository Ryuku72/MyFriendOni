import React, {useState, useRef, useEffect} from "react";

function SearchBtn(props) {
  const node = useRef();
  const [open, openUp] = useState(false)

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      openUp(true)
      return;
    }
    // outside click 
    openUp(false)
  };
        return(
            <div className="flex mr-2 relative" ref={node}>
            <button type="button" className="text-gray-700 w-32 font-semibold py-2 px-4 rounded inline-block items-center" style={props.style}>
              {props.title}
            </button>
            {open && props.children}
          </div>      
        )
      }


export default SearchBtn;








