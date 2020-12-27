import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import PrivateRoute from './PrivateRoute';
import {AuthContext} from './context/auth';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App(props) {
  
  const existingTokens=JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens]=useState(existingTokens || "");

  const setTokens = (data)=>{
    if(data){
      localStorage.setItem("tokens",JSON.stringify(data));
      setAuthTokens(data);
    }else{
      localStorage.removeItem("tokens");
    }    
  }

  return (
      <div>
        <AuthContext.Provider value={{authTokens, setAuthTokens:setTokens}}>
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/admin">Admin Page</Link></li>
              </ul>
              <Route   path="/" component={Home} />
              <Route   path="/login" component={Login} />
              <Route   path="/signup" component={Signup} />
              <PrivateRoute path="/admin" component={Admin} />
            </div>
          </Router>
        </AuthContext.Provider>
      </div>
  
  );
}

export default App;
