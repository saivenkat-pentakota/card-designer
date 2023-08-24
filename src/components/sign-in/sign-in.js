import React from "react";
import { Link } from "react-router-dom";
import "./sign-in.css";
import logo from "../../assets/images/signin/nature.svg";

class signIn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="displayTable">
        <div className="displayTableCell">
          <div className="authBlock">
            <h3>Sign In</h3>
            <div className="formGroup">
              <input
                type="text"
                className="formControl"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <input
                type="password"
                className="formControl"
                placeholder="Password"
                required
              />
            </div>
            {/* calling SignIn Api from AuthService */}
            <div className="formGroup">
              <input
                style= {{height: "50px"}}
                type="button"
                className ="btn btnPrimary"
                value="Log in"
                // onClick="authService.SignIn(userName.value, userPassword.value)"
              />
            </div>
            {/* forgot-password */}
            <div className="forgotPassword">
               <span><Link to = "/forgot-password">Forgot Password?</Link></span> 
            </div>
            {/* redirect-to-loginPage */}
            <div className="redirectToLogin">
                <span>Don't have an account?<span className="redirect"><Link to = "/sign-up">Sign Up</Link></span></span>
                 </div>
            <div className="displayAd">
                <div className="logo">
                    <img src = {logo} alt = "logoImage"/>
                    <span className="text">Fluid</span>
                </div>
                <div className="reimagine">
                    Reimagine
                </div>
                <div className="animate" style={{background:"balck"}}>
                    {/* {{show}} */}
                </div>
            </div>
            <h3></h3>
          </div>
        </div>
      </div>
    );
  }
};

export default signIn;
