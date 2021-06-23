import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import DepartmentSubject from './pages/DepartmentSubject';
import SignInSide from './pages/Login';

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path="/" exact component={Home}>
            <NavBar />
            <Home />
          </Route>
          <Route path="/departmentSubject" exact component={DepartmentSubject}>
            <NavBar />
            <DepartmentSubject />
            
          </Route>
          <Route path="/signIn" exact component={SignInSide} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
