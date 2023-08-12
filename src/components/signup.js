import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";



const Signup = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const {signUp} = useUserAuth();
  let navigate = useNavigate();


  const handleSubmit =async (e) =>{
    e.preventDefault();
    setError("");
    try {
      await signUp(email,password);
      navigate("/")
    }catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className=" m-4 p-4 d-flex flex-column justify-content-center" style={{border:"1px solid grey",textAlign:"center",width:"500px",height:"400px"}} >
        <h2 className="mb-3">Google Firebase Signup</h2>
        {error && <Alert variant = "danger">{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address" onChange={(e) =>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>setPassword(e.target.value)}
            />
          </Form.Group>

          <div>
            <Button  className="signupButton" style = {{width:"140px"}}  variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to = "/">login</Link>
      </div>
    </>
  );
};

export default Signup;