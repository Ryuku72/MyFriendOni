import React from 'react';
import "./style.css"

function Form(props){
    return (
      <div className="loginForm p-2 overflow-auto w-full" style={{height:"45vh"}}>
        <form id="loginform" className="flex flex-col justify-center items-center h-full">
        <div className="w-full flex flex-col sm:mt-3" style={{height:"20%"}}>
            <label className="sm:hidden xl:block w-full text-gray-700 text-sm font-bold" name="username">
              Username
            </label>
            <input className="w-full py-2 px-3 sm:mt-1 shadow appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-outline" id="username" name="username" type="userName" placeholder="Username" value={props.userName} onChange={props.onHandleUserName}/>
            </div>
          <div className="w-full flex flex-col xl:mt-2 sm:mt-6" style={{height:"20%"}}>
            <label className="sm:hidden xl:block w-full text-gray-700 text-sm font-bold" name="password">
              Password
            </label>
            <input className="w-full py-2 px-3 sm:mt-1 shadow appearance-none rounded text-gray-700 focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="**********" value={props.password} onChange={props.onHandlePassword}/>
            </div>
            <div className="w-full flex flex-col items-center xl:mt-0 sm:mt-6" style={{height:"40px"}}>
          <p className="w-full text-center text-red-400 mb-4 h-full" style={props.style}>{props.errorMessage}</p> 
          </div>
          <div className="w-full" style={{height:"20%"}}>
            <button className="ml-2 bg-teal-500 py-2 px-6 hover:bg-teal-700 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={props.postLogin}>
              <p className="signInBtn text-white font-bold">Sign In</p>
            </button>
          </div>
        </form>
      </div>
      );
}

export default Form;