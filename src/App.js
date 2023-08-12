import "./App.css";
import LoginForm from './components/login';
import SignUpForm from './components/signup';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center" style={{alignItems:"center"}}>
      <LoginForm/>
    </div>
  );
}

export default App;
