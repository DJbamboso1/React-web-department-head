import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
import Deparment from './pages/Deparment';
import SignInSide from './pages/Login';
import MainLayout from './layouts/MainLayout';

export let Context = React.createContext()


function App() {

  let [state, setState] = useState({
    sidebar: JSON.parse(localStorage.getItem('sidebar') || 'false'),
  })

  let [auth, setAuth] = useState(localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {
    login: false,
    user: null
  })

  function loginHandel({ email, password }) {
    if (email == 'admin@gmail.com' && password == '123456') {
      setAuth({
        login: true,
        user: {
          name: 'Dang Thuyen Vuong'
        }
      })

      localStorage.setItem('auth', JSON.stringify({
        login: true,
        user: {
          name: 'Dang Thuyen Vuong'
        }
      }))
    } else {
      return { error: 'Email hoặc password sai' }
    }
  }

  return (
    <Context.Provider value={{ state, setState, auth, loginHandel }}>
      <Router>
        <Switch>
          <Route path="/login" exact component={SignInSide} />
          <Route path="/">
            <MainLayout>
              <Route path="/" exact component={Deparment} />
            </MainLayout>
          </Route>
        </Switch>

      </Router>
    </Context.Provider>

  );
}

export default App;
