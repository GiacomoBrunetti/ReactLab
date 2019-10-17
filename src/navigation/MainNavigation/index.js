import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Today from '../../screens/Today';
import Planner from '../../screens/Planner';
import Shop from '../../screens/Shop';
import Order from '../../screens/Order';
import OrderDetail from '../../screens/OrderDetail';


function MainNavigation() {
  return (
    <div>
      <Switch>
      <Route path="/today" component={Today} />
      <Route path="/planner" component={Planner} />
      <Route path="/shop" component={Shop} />
      <Route path='/order/:orderId' component={OrderDetail}/>
      <Route path="/order" component={Order}/>
      <Redirect from="/" to="/today" />
      </Switch>
    </div>
  )
}

export default React.memo(MainNavigation);