import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Registrasi from './pages/registrasi'
import Login from './pages/login'
import LupaPassword from './pages/lupa-password'
import NotFound from './pages/404';
import Private from './pages/private';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pengaturan" component={Private}/>
        <Route path="/registrasi" component={Registrasi}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/lupa-password" component={LupaPassword}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
