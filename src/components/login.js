import React from "react";

import { Form } from "react-bootstrap";

import {Button} from 'react-bootstrap';

import GoogleButton from "react-google-button";



function Login() {
    return (
        <>
        <div className="d-flex flex-column justify-content-center p-4 m-4"  style={{border:"1px solid black",textAlign:"center",width:"500px",height:"400px"}} >
            <h2 className="mb-3 "> Google Firebase Login</h2>
            <Form> 
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control type = "email" placeholder="Email address"/>

                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Control type = "password" placeholder="Password" />

                </Form.Group>
                <div>
            <Button className="loginButton" style={{width:"120px"}} variant="primary" type="Submit">
              LogIn
            </Button>
            </div>

            </Form>
            <hr/>
            <div className="d-flex flex-row justify-content-center">
          <GoogleButton
            className="g-btn"
            type="dark"
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <a>SIGNUP</a>
      </div>
        </>
    );
}

export default Login;