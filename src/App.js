import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
import Deparment from './pages/Deparment';
// import Deparment1 from './pages/Deparment-1';
import SignInSide from './pages/Login';
import MainLayout from './layouts/MainLayout';
import Profile from './pages/Profile';
// import { response } from 'express';
// import axios from 'axios';

export let Context = React.createContext()


function App() {

  let [state, setState] = useState({
    sidebar: JSON.parse(localStorage.getItem('sidebar') || 'false'),
  })

  let [auth, setAuth] = useState(localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {
    login: false,
    user: null
  })

  const [rid, setRId] = useState(0);

  async function loginHandle({ username, password }) {
    let result = await fetch("https://fls.azurewebsites.net/api/v1/guest/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username, password }),
    });
    // alert(result.status);  
    // console.log(result);
    if (result.status === 400) {
      
      return { error: 'Email hoặc password sai' };
    }

    else {
      let result1 = await result.json();

      console.log("result: " + result1.id);

      let user = await fetch('https://fls.azurewebsites.net/api/v1/user/' + result1.id, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        // body: JSON.stringify(result.id),
      });
      user = await user.json();

      console.log("user: " + user.roleId)

      let role = await fetch('https://fls.azurewebsites.net/api/v1/role/' + user.roleId, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        // body: JSON.stringify(user.user),
      });
      role = await role.json();

      console.log(role);

      setRId(role.id);

      setAuth({
        login: true,
        user: {
          id: result1.id,
          name: user.fullname,
          token: result1.token
        }
      })

      localStorage.setItem('auth', JSON.stringify({
        login: true,
        user: {
          id: result1.id,
          name: user.fullname,
          token: result1.token
        }
      }))
    }
  }

  function logoutHandle() {
    setAuth({
      login: false,
      user: null
    });
    localStorage.removeItem('auth');
    localStorage.removeItem('sidebar');

  }

  return (
    <Context.Provider value={{ state, setState, auth, loginHandle, logoutHandle }}>
      <Router>
      <Switch>
          <Route path="/login" exact component={SignInSide} />
          <Route path="/">
            <MainLayout>
              <Route path="/" exact component={Deparment} />
              <Route path='/profile' exact component={Profile} />
            </MainLayout>
          </Route>
        </Switch>

      </Router>
    </Context.Provider>

  );
}

export default App;
