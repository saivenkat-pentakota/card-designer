import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Alert } from "react-bootstrap";

import { Button } from "react-bootstrap";

import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/userAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center p-4 m-4"
        style={{
          border: "1px solid grey",
          textAlign: "center",
          width: "500px",
          height: "400px",
        }}
      >
        <h2 className="mb-3 "> Google Firebase Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div>
            <Button
              className="loginButton"
              style={{ width: "140px" }}
              variant="primary"
              type="Submit"
            >
              <h5>Log In</h5>
            </Button>
          </div>
        </Form>
        <hr />
        <div className="d-flex flex-row justify-content-center">
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <Link to = "/phonesignup">
        <div>
            <Button
              className="signin-btn-phone m-3 p-2"
              style={{ width: "240px" }}
              variant="success"
              type="Submit"
            >
              Sign In with Phone
            </Button>
          </div>
          </Link>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">sign up</Link>
      </div>
    </>
  );
}

export default Login;
