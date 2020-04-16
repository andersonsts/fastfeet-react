import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Packages from '../pages/Packages';
import DeliveryMans from '../pages/DeliveryMans';
import Recipients from '../pages/Recipients';
import Problems from '../pages/Problems';

import RegistrationOfDeliveryMans from '../pages/RegistrationOfDeliveryMans';
import RegistrationOfRecipients from '../pages/RegistrationOfRecipients';
import RegistrationOfPackages from '../pages/RegistrationOfPackages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/packages" exact component={Packages} isPrivate />
      <Route path="/deliverymans" exact component={DeliveryMans} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/problems" exact component={Problems} isPrivate />
      <Route
        path="/deliverymans/register"
        component={RegistrationOfDeliveryMans}
        isPrivate
      />
      <Route
        path="/recipients/register"
        component={RegistrationOfRecipients}
        isPrivate
      />
      <Route
        path="/packages/register"
        component={RegistrationOfPackages}
        isPrivate
      />
    </Switch>
  );
}
