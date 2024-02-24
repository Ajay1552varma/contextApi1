import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext';

function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const {setUser}=useContext(UserContext);

    function handleclick(e){
      e.preventDefault();
      setUser(username,password)
    }

  return (
    <div>
      <h1>This is Login Component</h1>
      <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
      <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
      <button onClick={handleclick}>Login</button>
    </div>
  )
}

export default Login