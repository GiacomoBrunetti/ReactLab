import React from "react";
import { Switch, Route } from "react-router-dom";

import Today from '../../containers/Today';
import Planner from '../../containers/Planner';
import Shop from '../../containers/Shop';
import Order from '../../containers/Order';


export default function BottomNavigation() {
  return (
    <div>
      <Switch>
      <Route path="/today">
        <Today />
      </Route>
      <Route path="/planner">
        <Planner />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/order">
        <Order />
      </Route>

      </Switch>
    </div>
  )
}