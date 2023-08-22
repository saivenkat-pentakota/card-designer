import React from "react";
import "./verify-email.component.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class verifyEmail extends React.Component{
    constructor(){}
        render(){
            return(
                <div>
                    <div class="displayTable">
        <div class="displayTableCell">
      
          <div class="authBlock">
            <h3>Thank You for Registering</h3>
      
            <div class="formGroup">
              <p class="text-center">We have sent a confirmation email to</p>
              <p class="text-center">Please check your email and click on the link to verfiy your email address.</p>
            </div>
            
            {/* <!-- Calling SendVerificationMail() method using authService Api --> */}
            <div class="formGroup">
              <button type="button" class="btn btnPrimary" >
                <FontAwesomeIcon class="fas fa-redo-alt"/>
                Resend Verification Email
              </button>
            </div>
      
          </div>
      
          <div class="redirectToLogin">
            <span>Go back to?<span class="redirect"><Link to ="/signin"> Sign In</Link></span></span>
          </div>
      
        </div>
      </div>
                </div>
            );
        }
    
}