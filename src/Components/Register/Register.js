import React, { useState } from "react";
import "./Register.css";
import logoOne from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import Axios from "axios"

const Register = () => {
  const[email, setEmail]=useState('')
  const[userName, setUserName]=useState('')
  const[password, setPassword]=useState('')

  const createUser =()=>{
    Axios.post('http://localhost:3002/register', {
      Email: email,
      UserName: userName,
      Password: password
    }).then(()=>{
      console.log('User has been register');
    })
      
  }

  return (
    // <>
    //     <a href='/login'>To Login</a>

    // </>
    <>
      <div className="form-wrapper">
        <div className="form-sec">
          <div className="form-logo">
            <img src={logoOne} alt="logo image" />
          </div>
          <div className="form-heeading">
            <h3>GreenWings wants to Know You</h3>
          </div>
        </div>

        <form action="#">
          <div className="form-control">
            <input type="email" id="email" placeholder="Enter Email" onChange={(event)=>{
              setEmail(event.target.value)
            }} />
            {/* <label>Enter Email</label> */}
          </div>
          <div className="form-control">
            <input type="text" id="username" placeholder="Enter Username" onChange={(event)=>{
              setUserName(event.target.value)
            }}/>
            {/* <label>UserName</label> */}
          </div>
          <div className="form-control">
            <input type="password" id="password" placeholder="Password" onChange={(event)=>{
              setPassword(event.target.value)
            }} />
            {/* <label>Password</label> */}
          </div>
          <button type="submit" onClick={createUser}>Register</button>
        </form>
        <p>
        Have an account?
          <Link to="/" className="link-danger">
            <b>Login</b>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
