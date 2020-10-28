import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BandMaker from './pages/BandMaker';
import Login from './pages/Login';
import NewProfileConfirm from './pages/NewProfileConfirm';
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/bandmaker" component={ BandMaker } />
      <Route path="/newprofileconfirm" component={ NewProfileConfirm } />
    </BrowserRouter>
  )
}

export default Routes;