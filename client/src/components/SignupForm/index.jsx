import React from "react";
import { Link } from "react-router-dom";
import Tengu from "../../assets/img/tenguicon.png"
import "./style.css";

function SignUpForm(props) {
return (
<div className="signUp block">
<form id="signupform" className="w-full">
<p className="text-gray-700 font-bold">Welcome Newbie...</p>
<p className="mb-8 text-gray-700">Please fill out the information below</p>
   
   
    <div className="w-3/4 p-2">
      <label className="block w-full px-1 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Username
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="Username" value={props.userName} onChange={props.onHandleUserName}/>
    </div>


    <div className="w-full flex mb-2 mt-2 p-2">
    <div className="w-1/2 mr-4">
      <label className="block w-full p-2 uppercase text-gray-700 text-xs font-bold">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="********" value={props.passwordOne} onChange={props.onHandlePasswordOne}/>
    </div>
    <div className="w-1/2">
      <label className="w-full block p-2 uppercase text-gray-700 text-xs font-bold">
        Confirm Pw
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="********" value={props.passwordTwo} onChange={props.onHandlePasswordTwo}/>
    </div> 
    </div>

    <div className="flex justify-start p-2">
  <button className="flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-4 rounded font-mono" type="button" onClick={props.postSignUp}>
      Sign Up
    </button>
    <button className="mx-5 bg-purple-500 hover:bg-purple-800 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-4 rounded font-mono" type="button" onClick={props.clearForm}>
      Clear
    </button>
    <Link to="/login" className="flex items-end justify-center bg-transparent outline-none appearance-none text-teal-500 hover:text-teal-800 text-sm py-1 px-4 font-mono" type="button">
      Cancel
    </Link>
    </div>

    </form>
    <div className="imgAndError w-full inline-flex justify-between">
      <div className="inline-block w-1/2 p-4" style={{height:"20vh"}}>
      <ul style={props.style}>
      {props.errors.map((results,index) => {
        return <li key={index} className="text-red-400">{results} </li>
      })}
      </ul>
      </div>
      <div className="flex justify-end items-end w-1/2">
      <img src={Tengu} style={{height:"20vh"}} alt="Tengu Face" />
      </div>
    </div>
    
</div>

)
}

export default SignUpForm;