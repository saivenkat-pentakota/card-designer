import "./App.css";
import { Route ,Routes} from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";

// importing components
import LoginForm from './components/login';
import SignUpForm from './components/signup';
import {UserAuthContextProvider} from './context/userAuthContext';


function App() {
  return (
    <div className="App d-flex flex-column justify-content-center" style={{alignItems:"center"}}>
      <Container>
        <Row>
          <Col>
          <UserAuthContextProvider>
          <Routes>
            <Route path = "/" element = {<LoginForm/>}/>  
            <Route path = "/signup" element = {<SignUpForm/>}/>  
          </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
