import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncidents from './pages/NewIncidents'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon} />
        <Route path='/register' exact component={Register} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/incidents/new' exact component={NewIncidents} />
      </Switch>
    </BrowserRouter>
  );
}
