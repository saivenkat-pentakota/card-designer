// import React from "react";

// function signIn() {

//    return(
    
//     <div className="loading" *ngIf="dataService.load">
//     </div>
//     <div className="displayTable">
//             <div className="displayTableCell">
          
//               <div className="authBlock">
//                 <h3>Sign In</h3>
//                 <div className="formGroup">
//                   <input type="text" className="formControl" [(ngModel)]="email" placeholder="Email" #userName required (blur)="getProjects()">
//                 </div>
          
//                 <div className="formGroup">
//                   <input type="password" class="formControl" placeholder="Password" #userPassword required/>
//                 </div>
    
//                 <div className="formGroup">
//                   <select className="form-select" aria-label="Default select example" [(ngModel)]="dataService.activeProject" style="height: 35px;">
//                     <option value="-1">select project</option>
//                     <option *ngFor="let project of projects" [ngValue]="project">
//                       {{project.projectName}}
//                   </option>
//                   </select>
//                 </div>
          
//                 <!-- Calling SignIn Api from AuthService -->
//                 <div className="formGroup">
//                   <input style="height: 50px;" type="button" class="btn btnPrimary" value="Log in" (click)="authService.SignIn(userName.value, userPassword.value)">
//                 </div>
          
//                 <!-- <div className="formGroup">
//                   <span className="or"><span className="orInner">Or</span></span>
//                 </div> -->
          
//                 <!-- Calling GoogleAuth Api from AuthService -->
//                 <!-- <div className="formGroup">
//                   <button type="button" className="btn googleBtn" (click)="authService.GoogleAuth()">
//                     <i className="fab fa-google-plus-g"></i>
//                     Log in with Google
//                   </button>
//                 </div> -->
          
//                 <div className="forgotPassword">
//                   <span routerLink="/forgot-password">Forgot Password?</span>
//                 </div>
//               </div>
          
//               <div className="redirectToLogin">
//                 <span>Don't have an account?<span class="redirect" routerLink="/sign-up"> Sign Up</span></span>
//               </div>
          
//             </div>
//             <div className="displayAd">
//               <div class="logo">
//               <img src="../../assets/images/signin/nature.svg"/>
//               <span className="text">Fluid</span>
//               </div>
//               <div className="reimagine">
//                 Reimagine
//               </div>
//               <div className="animate" style={{background:"color"}}>
//                 {{show}}
//               </div>
//             </div>
//           </div>


          
//    );
      
// };