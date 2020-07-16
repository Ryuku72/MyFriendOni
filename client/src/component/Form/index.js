import React from 'react';
import { Link } from "react-router-dom";
import "./style.css"
import Tengu from "../../assets/img/onilogin.png"

function Form(props){

    return (
      <div className="flex justify-center items-center">
        <div className="loginForm">
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-6 mt-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" name="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="userName" placeholder="Username" value={props.userName} onChange={props.onHandleUserName}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" name="password">
              Password
            </label>
            <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************" value={props.password} onChange={props.onHandlePassword}/>
          </div>
          <div className="flex items-start justify-between">
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={props.postLogin}>
              Sign In
            </button>
            <a className="cursor-pointer px-4 font-bold text-sm text-blue-500 hover:text-blue-800 mb-12" href="#">
              Forgot Password?
            </a>
            { props.isError &&<props.Error>The username or password provided were incorrect!</props.Error> }
          </div>
          <p className="flex text-right mt-12 px-4 text-red-700 font-bold text-sm">...if your new please click <Link to="/signup" className="signup cursor-pointer text-6xl text-green-600 hover:text-green-800">HERE!!!</Link></p>
        </form>
      </div>
      <img src={Tengu} style={{height:"50vh"}} alt="Tengu Teacher"/>
      </div>
      );
}

export default Form;