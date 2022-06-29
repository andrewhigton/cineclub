import React from 'react';

import { Route, RouteProps, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

// type RouteProps = {
	interface PrivateRouteProps extends RouteProps {
	auth: {
		isAuthenticated: boolean,
		loading: boolean,
	}
	path?: string,
	component: React.ComponentType<any>;
	// Component: React.ComponentType<any>;
};

	const PrivateRoute = ( props: PrivateRouteProps ) => {
	
	const { component: Component, auth: { isAuthenticated, loading }, path, ...rest } = props; 

	return (
	<Route 
	{...rest} 
		render={routeProps => 
		!isAuthenticated && !loading ? (  
    	// navigate('/login')  
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



// const PrivateRoute: React.FC<RouteComponentProps<RouteProps>> = ({ 

// 	component: Component, 
// 	auth: { isAuthenticated, loading },
// 	path, 
// 	...rest 
// 	}) => (

// 	<Route 
// 	{...rest} 
// 		render={props => 
// 		!isAuthenticated && !loading ? (  
// 		<Redirect to='/login' />
// 		) : (
// 		<Component {...props} />
// 		)	
// 	}
// 	/>
// );

// const mapStateToProps = state => ({
// 	auth: state.auth
// });

// export default connect(mapStateToProps)(PrivateRoute);