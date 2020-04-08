import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import DeliveryMans from '../pages/DeliveryMans';
import Recipients from '../pages/Recipients';
// import Problems from '../pages/Problems';
import Teste from '../pages/Teste';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/deliverymans" component={DeliveryMans} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/problems" component={Teste} isPrivate />
    </Switch>
  );
}
