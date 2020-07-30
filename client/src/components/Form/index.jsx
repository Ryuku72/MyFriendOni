import React from 'react';
import "./style.css"

function Form(props){
    return (
      <div className="loginForm overflow-auto" style={{height:"50vh", width:"35vw"}}>
        <form id="loginform" className="flex flex-col justify-center items-center h-full">
        <div className="w-full flex flex-col sm:mt-3" style={{height:"20%"}}>
            <label className="sm:hidden xl:block py-2 w-full text-gray-700 text-sm font-bold" name="username">
              Username
            </label>
            <input className="errorText w-full py-2 px-3 sm:mt-1 shadow appearance-none border rounded text-gray-700 focus:outline-none" id="username" name="username" type="userName" placeholder="Username" value={props.userName} onChange={props.onHandleUserName}/>
            </div>
          <div className="w-full flex flex-col xl:mt-2 sm:mt-2" style={{height:"20%"}}>
            <label className="sm:hidden xl:block w-full py-2 text-gray-700 text-sm font-bold" name="password">
              Password
            </label>
            <input className="errorText w-full py-2 px-3 sm:mt-2 shadow appearance-none rounded text-gray-700 focus:outline-none" name="password" id="password" type="password" placeholder="**********" value={props.password} onChange={props.onHandlePassword}/>
            </div>
          <div className="w-full xl:inline-flex sm:flex sm:mt-6" style={{height:"20%"}}>
            <div className="w-full py-2">
            <button className="ml-2 bg-teal-500 hover:bg-teal-700 rounded focus:outline-none" type="submit" onClick={props.postLogin}>
              <p className="signInBtn text-white font-bold h-full w-full py-3 px-4">Sign In</p>
            </button>
            </div>
            <div className="w-full">
            <p className="w-full h-full px-2 py-1 flex justify-center items-center text-red-400 overflow-y-auto" style={props.style}>
              <span className="errorText">{props.errorMessage}</span>
              </p> 
          </div>
          </div>
        </form>
      </div>
      );
}

export default Form;