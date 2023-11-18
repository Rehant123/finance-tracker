import React, { useState } from 'react'

import style from "./Login.module.css"
export default function Login() {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
const handlesubmit = (e)=>{
e.preventDefault();
console.log(password)
  }
    return (


   <form onSubmit = {handlesubmit} className={style['login-form']} action="">

<h2>Login</h2>
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
<button className='btn'>Login</button>
   </form>
  )
}
