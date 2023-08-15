import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Button } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";


const PhonesignUp = () => {
    const [number,setNumber] = useState("");
    const [error,setError] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    const { setUpRecaptcha } = useUserAuth();
    const navigate = useNavigate();

    const getOtp = async (e) =>{
        e.preventDefault();
        console.log(number);
        setError("");
        if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptcha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
    };
    const verifyOtp = async (e) => {
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
          await result.confirm(otp);
          navigate("/home");
        } catch (err) {
          setError(err.message);
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
        <h2 className="mb-3 "> Mobile Sign In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3 " controlId="formBasicPhoneNumber">
            <div className='d-flex flex-row justify-content-center m-2'>
            <PhoneInput 
            className='phonenumber-input' 
            style={{width:"300px"}}
            defaultCountry='IN'
            value = {number}
            onChange = {setNumber}

            placeholder = "Enter Phone Number"
            />
            </div>
            <div id = "recaptcha-container" ></div>
          </Form.Group>
          
          <div className='button'>
          <Link to = "/">
            <Button className='btn btn-secondary m-2'>Cancel</Button>
            </Link>
            <Button className='btn btn-primary m-2' type='submit'>Send OTP</Button>
          </div>
          </Form>
          <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to ="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
          </div>
          </>
      );
}
   
  
export default PhonesignUp;