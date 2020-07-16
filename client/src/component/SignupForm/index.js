import React from "react";
import Tengu from "../../assets/img/tenguicon.png"
import "./style.css";

function SignUpForm(props) {
return (
<div className="w-3/4 flex items-center justify-center border-2">
<form className="w-3/4">
<p className="text-gray-700 font-bold">Welcome Newbie...</p>
<p className="mb-8 text-gray-700">Please fill out the information below</p>
    <div className="w-3/4 mb-3">
      <label className="block px-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Username
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="Joshua" />
    </div>
    <div className="w-full flex mb-5">
    <div className="w-2/5 md:mb-0 mb-2 pr-4">
      <label className="block px-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="**********" />
    </div>
    <div className="w-2/5 md:mb-0 mb-2 pl-4">
      <label className="block px-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
        Confirm Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="**********" />
    </div> 
    </div>
    <div className="flex justify-start py-3">
  <button class="flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-4 rounded font-mono" type="button">
      Sign Up
    </button>
    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1  px-4 rounded font-mono" type="button">
      Cancel
    </button>
    </div>
    </form>
    <img src={Tengu} style={{height:"50vh"}} />
</div>

)
}

export default SignUpForm;