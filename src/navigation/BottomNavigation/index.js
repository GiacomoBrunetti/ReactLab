import React from "react";
import { Switch, Route } from "react-router-dom";

import Today from '../../containers/Today';
import Planner from '../../containers/Planner';
import Shop from '../../containers/Shop';
import Order from '../../containers/Order';


function BottomNavigation() {
  return (
    <div>
      <Switch>
      <Route path="/today" component={Today} />
      <Route path="/planner" component={Planner} />
      <Route path="/shop" component={Shop} />
      <Route path="/order" component={Order} />
      </Switch>
    </div>
  )
}

export default React.memo(BottomNavigation);