import './App.css';
import React, {useState} from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  const [user, setUser] = useState(null);
  const [page, setPage] = useState("LOGIN");


  const successfulLoginHandler = (user) => {
    setUser(user);
  }

  const handleClickSignUp = () => {
    setPage("SIGNUP");
  }

  let pageToRender;

  switch(page) {
    case "LOGIN" :
      pageToRender = <Login successfulLoginHandler = { successfulLoginHandler }  handleClickSignUp = {handleClickSignUp} /> 
      break;
    case "SIGNUP" :
      pageToRender = <SignUp successfulLoginHandler = { successfulLoginHandler }/>
      break;
    default:
      pageToRender = <Login successfulLoginHandler = { successfulLoginHandler } />
  }

  return (
    <div className="container">
      { pageToRender }
      
    </div>
  );
}

export default App;
