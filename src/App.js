import "./App.css";
import { Route ,Routes} from "react-router-dom";

// importing components
import LoginForm from './components/login';
import SignUpForm from './components/signup';
import PhoneSignUp from './components/PhoneSignUp';

import {UserAuthContextProvider} from './context/userAuthContext';


function App() {
  return (
    <div className="App d-flex flex-column justify-content-center" style={{alignItems:"center"}}>
          <UserAuthContextProvider>
          <Routes>
            <Route path = "/" element = {<LoginForm/>}/>  
            <Route path = "/signup" element = {<SignUpForm/>}/>  
            <Route path = "/phonesignup" element = {<PhoneSignUp/>}/>
          </Routes>
          </UserAuthContextProvider>
          
    </div>
  );
}

export default App;
