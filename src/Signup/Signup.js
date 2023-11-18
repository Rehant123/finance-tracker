import React, { useState } from 'react'

import style from "./Signup.module.css";
import useSignup from '../hooks/useSignup';
export default function Signup() {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [displayname,setdisplayname] = useState("");
    const {signup,isPending,error} = useSignup();


const handlesubmit = (e)=>{
e.preventDefault();
signup(email,password,displayname)
  }
    return (


   <form onSubmit = {handlesubmit} className={style['signup-form']} action="">

<h2>Signup</h2>
<label for="">
    <span>email:</span>
    <input 
    value = {email}
    onChange={(e)=>{setemail(e.target.value)}}
    type="email"/>
</label>

<label for="">
    <span>password:</span>
    <input 
    value = {password}
    onChange={(e)=>{setpassword(e.target.value)}}
    type="password"/>
</label>
<label for="">
    <span>display name:</span>
    <input 
    value = {displayname}
    onChange={(e)=>{setdisplayname(e.target.value)}}
    type="text"/>
</label>

{!isPending && <button className='btn'>Signup</button>}
{isPending && <button className='btn' disabled>Loading</button>}
{error && <p>{error}</p>}

   </form>
  )
}
