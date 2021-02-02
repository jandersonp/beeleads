import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={Landing} /> */}
    <Route path="/" component={SignIn} />
  </Switch>
);

export default Routes;
