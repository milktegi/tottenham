import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/authRoutes/privateRoutes';

import Home from './components/home';
import Signin from './components/signin';
import Dashboard from './components/admin/dashboard';

const Routes = props => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        {/** define route */}
        <PrivateRoute
          {...{ props }}
          path="/dashboard"
          exact
          component={Dashboard}
        />

        <Route path="/sign-in" exact component={Signin} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
