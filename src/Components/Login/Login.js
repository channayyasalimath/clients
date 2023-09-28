import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom'
import logoOne from '../Dashboard/Assets/logo.png'
import Dashboard from '../Dashboard/Dashboard' 
import Axios from "axios"



const Login = () => {
    const [loginUserName, setLoginUserName]=useState('')
    const [loginPassword, setLoginPassword]=useState('')
    const navigateTo = useNavigate()

    //Message To User
    const[loginStatus, setLoginStatus]=useState('')
    const[statusHolder, setStatusHolder]=useState('message')


    const loginUser =(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3002/login', {
          LoginUserName: loginUserName,
          LoginPassword: loginPassword
        }).then((response)=>{
          console.log();
          if(response.data.message || loginUserName === '' || loginPassword=== ''){
            //if credentials dont match
            navigateTo('/') //navigate to Login page
            setLoginStatus('Credentials Dont Exist!')
        }else{
            navigateTo("/dashboard")// if credentials match navigate to the DASHBOARD
          }
        })    
      }

      useEffect(()=>{
        if(loginStatus !== ''){
            setStatusHolder('showMessage')
            setTimeout(()=>{
                setStatusHolder('message')

            },4000)
        }
      },[loginStatus])

   //Clear the form on submit
   const onSubmit=()=>{
    setLoginUserName('')
    setLoginPassword('')
   }   

  return (
    <>
    {/* <nav>
        <a href="#"></a>
        <h3>GreenWings</h3>
    </nav> */}
    <div className="form-wrapper">
        <div className='form-sec'>
            <div className='form-logo'>
            <img src={logoOne} alt="logoSymbol" />
            </div>
            <div className='form-heeading'>
            <h3>Welcome To GreenWings</h3>
            </div>
        </div>
        
        
        <form action="#" onSubmit={onSubmit}>
            <span className={statusHolder} id='cred'>{loginStatus}</span>
            <div className="form-control">       
            <input type="text" id="username" placeholder="Enter Username" onChange={(event)=>{
              setLoginUserName(event.target.value)
            }}/>
                {/* <label>Email Username</label> */}
            </div>
            <div className="form-control">
            <input type="password" id="password" placeholder="Password" onChange={(event)=>{
              setLoginPassword(event.target.value)
            }} />
                {/* <label>Password</label> */}
            </div>
            <button type="submit" onClick={loginUser}>Login</button>
            
        </form>
        <p>Don't have an account? <Link to="/register"
                className="link-danger"><b>Sign Up</b></Link></p>
                {/* <a href='/dashboard'>Dashboard</a> */}
        
    </div>
    </>
  )
}

export default Login