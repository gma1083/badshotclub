import './App.css';
import React, {useState} from 'react';
import Login from './components/login';

function App() {

  const [user, setUser] = useState(null);
  const [page, setPage] = useState("LOGIN");


  const successfulLoginHandler = (user) => {
    setUser(user);
  }

  let pageToRender;

  switch(page) {
    case "LOGIN" :
      pageToRender = <Login successfulLoginHandler = { successfulLoginHandler } /> 
      break;
    default:
      pageToRender = <Login successfulLoginHandler = { successfulLoginHandler } />
  }

  return (
    <div className="container">
      <h1> Welcome To the BSC Website</h1>
      { pageToRender }
      
    </div>
  );
}

export default App;
