import React from 'react'
import Layout from './hoc/Layout'
import { Switch, Route } from 'react-router-dom';

import Home from './components/home'
import Signin from './components/signin';
import Dashboard from './components/admin/dashboard'

const Routes = (props) => {
	return (  
		<Layout>
			<Switch>
				{/** define route */}
				<Route path="/sign-in" exact component={Signin}/>
				<Route path="/dashboard" exact component={Dashboard}/>
				<Route path="/" exact component={Home}/>
				
			</Switch>
		</Layout>
	);
}
 
export default Routes;