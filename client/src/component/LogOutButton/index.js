import React from "react";

function LogOutButton(props) {
  
        return(
            <div className="flex">
            <div className="mr-2 dropdown relative">
            <button type="button" className="text-gray-700 bg-orange-400 w-32 font-semibold py-2 px-4 rounded inline-block items-center" onClick={props.logOut}>
              {props.title}</button>
          </div>
          </div>      
        )
      }


export default LogOutButton;








