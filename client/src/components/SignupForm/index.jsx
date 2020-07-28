import React from "react";
import { Link } from "react-router-dom";
import Tengu from "../../assets/img/tenguicon.png"
import "./style.css";

function SignUpForm(props) {
return (
<div className="signUp w-3/4 flex items-center justify-center border-2">
<form id="signupform" className="w-3/4">
<p className="text-gray-700 font-bold">Welcome Newbie...</p>
<p className="mb-8 text-gray-700">Please fill out the information below</p>
    <div className="w-3/4 mb-3">
      <label className="block px-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Username
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="Username" value={props.userName} onChange={props.onHandleUserName}/>
    </div>
    <div className="w-full flex mb-5">
    <div className="w-2/5 md:mb-0 mb-2 mr-4">
      <label className="block px-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="********" value={props.passwordOne} onChange={props.onHandlePasswordOne}/>
    </div>
    <div className="w-2/5 md:mb-0 mb-2">
      <label className="block px-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
        Confirm Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="********" value={props.passwordTwo} onChange={props.onHandlePasswordTwo}/>
    </div> 
    </div>
    <p className="text-red-400 mb-2" style={props.style}>{props.errors}</p> 
    <div className="flex justify-start py-3">
  <button className="flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-4 rounded font-mono" type="button" onClick={props.postSignUp}>
      Sign Up
    </button>
    <Link to="/login" className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1  px-4 rounded font-mono" type="button">
      Cancel
    </Link>
    </div>
    </form>
    <img src={Tengu} style={{height:"50vh"}} alt="Tengu Face" />
</div>

)
}

export default SignUpForm;