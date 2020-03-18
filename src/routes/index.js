import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import Parcels from '../pages/Parcels';
import Deliverymen from '../pages/Deliverymen';
import Recipients from '../pages/Recipients';
import Problems from '../pages/Problems';

import RecipientForm from '../pages/RecipientForm';
import ParcelForm from '../pages/ParcelForm';
import DeliverymanForm from '../pages/DeliverymanForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/parcels" component={Parcels} isPrivate isList />
      <Route path="/deliverymen" component={Deliverymen} isPrivate isList />
      <Route path="/recipients" component={Recipients} isPrivate isList />
      <Route path="/problems" component={Problems} isPrivate isList />

      <Route path="/recipient" component={RecipientForm} isPrivate />
      <Route path="/parcel" component={ParcelForm} isPrivate />
      <Route path="/deliveryman" component={DeliverymanForm} isPrivate />
    </Switch>
  );
}
