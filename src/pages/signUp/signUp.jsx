import './signUp.css'
import React from 'react';

// import { Container } from './styles';

function SignUp() {
  return <div className="logIn">
      <div className="logInWraper">
              <div className="logInLeft">
                  <span className="logInLogo">LogicaBox</span>
                  <span className="logInTxtLeft">you can signUpfrom here!</span>
              </div>
              <div className="logInRight">
                  <span className="loginTxtRight">Sign Up</span>
                  <input type="email" placeholder='email' className="loginInput" />
                  <input type="email" placeholder='email' className="loginInput" />
                  <input type="password" placeholder='password' className="loginInput" />
                  <button className="signupButton">signUp</button>
                  <button className="loginButton">log in</button>

              </div>

      </div>
  </div>;}
   export default SignUp;