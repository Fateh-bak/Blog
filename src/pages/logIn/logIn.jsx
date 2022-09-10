import './logIn.css'
import React from 'react';

// import { Container } from './styles';

function Login() {
  return <div className="logIn">
      <div className="logInWraper">
              <div className="logInLeft">
                  <span className="logInLogo">LogicaBox</span>
                  <span className="logInTxtLeft">you can logIn to your acount from here!</span>
              </div>
              <div className="logInRight">
                  <span className="loginTxtRight">Log in</span>
                  <input type="email" placeholder='email' className="loginInput" />
                  <input type="password" placeholder='password' className="loginInput" />
                  <span className="forgotPassword">forgot Password</span>
                  <button className="loginButton">log in</button>
                  <button className="signupButton">signUp</button>

              </div>

      </div>
  </div>;}
   export default Login;