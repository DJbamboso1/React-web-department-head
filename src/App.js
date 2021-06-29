import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
import Deparment from './pages/Deparment';
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
  


  async function loginHandel({ username, password }) {
    let result = await fetch("https://fls.azurewebsites.net/api/v1/guest/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ username, password }),
    });
    // alert (result.status);
    // result = await result.json();
    // history.push('/');
    // alert(result.username)
    if (await result.status === 400) {
      return { error: 'Email hoặc password sai' };
    }
   
    else  {
      result = await result.json();
      
      setAuth({
        login: true,
        user: {
          id: result.id,
          name: result.username,
          token: result.token
        }
      })

      localStorage.setItem('auth', JSON.stringify({
        login: true,
        user: {
          id: result.id,
          name: result.username,
          token: result.token
        }
      }))
    } 


    // if (username == 'abcde' && password == '123') {
    //   setAuth({
    //     login: true,
    //     user: {
    //       name: 'User name'
    //     }
    //   })

    //   localStorage.setItem('auth', JSON.stringify({
    //     login: true,
    //     user: {
    //       name: 'User name'
    //     }
    //   }))
    // } else {
    //   return { error: 'Email hoặc password sai' }
    // }
  }

  return (
    <Context.Provider value={{ state, setState, auth, loginHandel }}>
      <Router>
        <Switch>

          <Route path="/login" exact component={SignInSide} />
          <Route path="/">
            {
              !auth.login ? <Redirect to="/login" /> :

                <MainLayout>
                  <Route path="/" exact component={Deparment} />
                  <Route path="/profile" exact component={Profile} />
                </MainLayout>
            }
          </Route>
        </Switch>

      </Router>
    </Context.Provider>

  );
}

export default App;
