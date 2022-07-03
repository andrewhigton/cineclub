import React from 'react';

import { Route, RouteProps, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

	interface PrivateRouteProps extends RouteProps {
	auth: {
		isAuthenticated: boolean,
		loading: boolean,
	}
	path?: string,
	component: React.ComponentType<any>;
};

	const PrivateRoute = ( props: PrivateRouteProps ) => {
	
	const { component: Component, auth: { isAuthenticated, loading }, path, ...rest } = props; 

	return (
	<Route 
	{...rest} 
		render={routeProps => 
		!isAuthenticated && !loading ? (  
		<Redirect to='/login' />
		) : (
		<Component {...routeProps} />
		)	
	}
	/>
	);
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
