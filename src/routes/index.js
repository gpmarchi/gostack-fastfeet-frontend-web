import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Deliveryman from '../pages/Deliveryman';
import Parcel from '../pages/Parcel';
import Recipient from '../pages/Recipient';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/parcel" component={Parcel} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
    </Switch>
  );
}
