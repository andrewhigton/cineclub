import React, { Fragment, useState, FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './auth.css';

interface LoginProps {
	login: (email, password) => void;
	isAuthenticated: boolean;
}

const Login:React.FC<LoginProps> = ( { login, isAuthenticated } ) => {
	const  [formData, setFormData] = useState<{
		email: string | number,
		password: string | number | undefined,
	}>({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e => setFormData
	({...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e: FormEvent<HTMLFormElement>)  => {  
		e.preventDefault(); 
		
		if(email === '' || password === '') {
			alert('Please fill in your email and password');
			return;
		}
		login(email, password)
		}

		if(isAuthenticated) {
			return <Redirect to="/film/dashboard"/>;
		}

return <div className='auth-pages'>
		      <p className="lead">Sign in to your account</p>
		      <form className="form" action="create-profile.html" onSubmit={e => onSubmit(e)}>
		        <div className="form-group">
		          <input 
		          type="email" 
		          placeholder="Email Address" 
		          name="email" 
		          value={email}
		          onChange={e => onChange(e)} 
		          required />
		        </div>
		        <div className="form-group">
		          <input
		            type="password"
		            placeholder="Password"
		            name="password"
		            value={password}
		          	onChange={e => onChange(e)} 
		            // minlength="4"
		          />
		        </div>
		        <input type="submit" className="btn" value="Login" />
		      </form>
		      <p className="lead">
		        Don't have an account? <Link to="/register">Sign Up</Link>
		      </p>
		   </div>
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login} )(Login);