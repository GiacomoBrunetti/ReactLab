import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from '../../screens/Login';
import ChangePassword from '../../screens/ChangePassword';


function AuthNavigation() {
  return (
    <div>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/change-password" component={ChangePassword} />
      <Redirect from="/" to="/login" />
      </Switch>
    </div>
  )
}

export default React.memo(AuthNavigation);