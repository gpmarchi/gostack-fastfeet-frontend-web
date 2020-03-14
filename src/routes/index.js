import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Deliveryman from '../pages/Deliveryman';
import Parcel from '../pages/Parcel';
import Recipient from '../pages/Recipient';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/deliveryman" component={Deliveryman} />
      <Route path="/parcel" component={Parcel} />
      <Route path="/recipient" component={Recipient} />
    </Switch>
  );
}
