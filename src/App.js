import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import PrivateRoute from './PrivateRoute';
import {AuthContext} from './context/auth';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App(props) {
  
  // const existingTokens=JSON.parse(localStorage.getItem("tokens"));
  const existingTokens=JSON.parse(sessionStorage.getItem("tokens"));
  const [authTokens, setAuthTokens]=useState(existingTokens);

  // useEffect(()=>{
  //   const existingTokens=JSON.parse(sessionStorage.getItem("tokens"));
  //   if(existingTokens){
  //     setAuthTokens(existingTokens)
  //   }else{
  //     setAuthTokens("")
  //   }
  // },[])

  const setTokens = (data)=>{
    if(data){
      // localStorage.setItem("tokens",JSON.stringify(data));
      sessionStorage.setItem("tokens",JSON.stringify(data));
      setAuthTokens(data);
    }else{
      // localStorage.removeItem("tokens");
      sessionStorage.removeItem("tokens");      
      setAuthTokens("");
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
              <Route  exact path="/" component={Home} />
              <Route   exact path="/login" component={Login} />
              <Route   exact path="/signup" component={Signup} />
              <PrivateRoute path="/admin" component={Admin} />
            </div>
          </Router>
        </AuthContext.Provider>
      </div>
  
  );
}

export default App;
