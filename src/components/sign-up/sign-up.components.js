import React from "react";
import "./sign-up.components.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab,faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/signin/nature.svg";

class signUp extends React.Component {
  constructor() {}
  render() {
    return (
      <div className="displayTable">
        <div className="displayTableCell">
          <div className="authBlock">
            <h3>Sign Up</h3>
            <div className="formGroup">
              <input
                type="email"
                className="formControl"
                placeholder="Email Address"
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

            <div class="formGroup">
              <input
                type="button"
                style={{ height: "50px" }}
                className="btn btnPrimary"
                value="Sign Up"
                // onClick="authService.SignUp(userEmail.value, userPwd.value)"
              />
            </div>

            <div class="formGroup">
        <span class="or"><span class="orInner">Or</span></span>
      </div>

      {/* continue with google */}
      <div class="formGroup">
        <button type="button" class="btn googleBtn" onClick  = "authService.GoogleAuth()">
          <FontAwesomeIcon icon = "coffee"/>
          Continue with Google
        </button>
      </div>
      <div className="redirectToLogin">
        <span>Already have an account? <span className="redirect"><Link to = "/sign-in">Log In</Link></span></span>
      </div>

          </div>
          <div className="displauAd">
            <div className="logo">
                <img src = {logo} alt = "logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signUp;
