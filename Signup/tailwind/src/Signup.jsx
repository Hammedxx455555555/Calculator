/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Signup = () => {
const [fname,setFname] = useState(" ")
const [lname,setLname] = useState(" ")
const [email,setEmail] = useState(" ")
const [password,setPassword] = useState(" ")

  return (
   <>
   
   <div>
            <form  method="post">
 <h1>Sign Up</h1>

 <label htmlFor="fname"  className="fname"> 
        <input type="text"  autoComplete='off' className="email" placeholder='First-Name' 
        onChange={(e)=>{setFname( fname + e.target.value)}} name='fname' required />
        </label> <br />   

        <label htmlFor="lname"  className="lname"> 
        <input type="text"  autoComplete='off' className="lname" placeholder='Last-Name' 
        onChange={(e)=>{setLname( lname + e.target.value)}} name='lname' required/>
        </label> <br />   

 <label htmlFor="email"  className="email"> 
        <input type="email"  autoComplete='off' className="email" placeholder='Email' 
        onChange={(e)=>{setEmail( email + e.target.value)}} name='email' required/>
        </label> <br />   

     <label htmlFor="password" className="password"> 
        <input type="password" autoComplete='off' className="pass"  placeholder='Password' 
        onChange={(e)=>{setPassword( password + e.target.value)}} name='password' required/>
      </label>   
         <br />

             <button>Sign Up</button>
            <p> Have an account already ?<Link to='/login'>Sign-In</Link> </p>
              </form>     
     
        </div>
   
   </>
  )
}

export default Signup
