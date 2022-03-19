import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux';

interface RouteProps {
	auth: {
		isAuthenticated: boolean,
		loading: boolean,
	}
	component: React.ComponentType<any>;
	Component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<RouteProps> = ({ 
	component: Component, 
	auth: { isAuthenticated, loading }, 
	...rest 
	}) => (

	<Route 
	{...rest} 
		render={props => 
		!isAuthenticated && !loading ? (  
		<Redirect to='/login' />
		) : (
		<Component {...props} />
		)	
	}
	/>
);

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);