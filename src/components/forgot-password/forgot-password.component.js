import React from "react";
import { Link } from "react-router-dom";
import "./forgot-password.component.css";

class forgotPassword extends React.Component{
    constructor() {}
render(){
    return(
        <div class="displayTable">
        <div class="displayTableCell">
          <div class="authBlock">
            <h3>Reset Password</h3>
      
            <p class="text-center">Please enter your email address to request a password reset.</p>
      
            <div class="formGroup">
              <input type="email" class="formControl" placeholder="Email Address"  required />
            </div>
      
            {/* <!-- Calling ForgotPassword from AuthService Api --> */}
            <div class="formGroup">
              <input type="submit" style="height: 50px;" class="btn btnPrimary" value="Reset Password" onClick = "authService.ForgotPassword(passwordResetEmail.value)" />
            </div>
          </div>
      
          <div class="redirectToLogin">
            <span>Go back to ? <span class="redirect" ><Link to= "/sign-in">Log In</Link></span></span>
          </div>
      
        </div>
      </div>
    );
}
}

export default forgotPassword;