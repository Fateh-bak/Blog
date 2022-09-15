import "./signUp.css";
import React, { useState } from "react";
import  { Navigate } from 'react-router-dom'
import register from "../../api/api"
// import { Container } from './styles';

function SignUp() {
    const [registred,setRegistred]=useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function handelName(e){
        setName(e.target.value)
  }
  function handelEmail(e){
    setEmail(e.target.value)
}
function handelPassword(e){
    setPassword(e.target.value)
}
  //handel register
  async function handelRegister(name,email,password){
      console.log(name,email,password)
      const status = await register(name,email,password)
      setRegistred(status)
  }


  if(!registred){  return (
    <div className="logIn">
      <div className="logInWraper">
        <div className="logInLeft">
          <span className="logInLogo">LogicaBox</span>
          <span className="logInTxtLeft">you can signUpfrom here!</span>
        </div>
        <div className="logInRight">
          <span className="loginTxtRight">Sign Up</span>
          <input
            type="text"
            onChange={(e)=>{handelName(e)}}
            placeholder="name"
            className="loginInput"
          />
          <input
            type="email"
            onChange={(e)=>{handelEmail(e)}}
            placeholder="email"
            className="loginInput"
          />
          <input
            type="password"
            onChange={(e)=>{handelPassword(e)}}
            placeholder="password"
            className="loginInput"
          />
          <button className="signupButton" onClick={()=>{handelRegister(name,email,password)}}>signUp</button>
          <a href="/login" className="loginButton">log in</a>
        </div>
      </div>
    </div>
  );}else{
      return <Navigate to="/login" />
  }

}
export default SignUp;
