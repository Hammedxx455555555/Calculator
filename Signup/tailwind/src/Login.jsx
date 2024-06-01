/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Login = () => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
  return (
    <>
     <div>
            <form  method="post">
      <h1>Sign In</h1>
              <label htmlFor="email"  className="email"> 
 <input type="email" autoComplete='off' className="email" placeholder='Email'
  onChange={(e)=>{setEmail( email + e.target.value)}} name='email' required/>
        </label> <br />   

        <label htmlFor="password" className="password"> 
        <input type="password" autoComplete='off' className="pass"  placeholder='Password' 
        onChange={(e)=>{setPassword( password + e.target.value)}} name='password' required />
      </label>  
          <br />
             <button >Sign In</button>
            <p>Don&apos;t have account yet?<Link to="/">Sign-Up</Link> </p>
              </form>     
     
        </div>
    
    </>
  )
}

export default Login
