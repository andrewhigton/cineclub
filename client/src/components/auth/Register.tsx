  import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../actions/auth';
import './auth.css';

interface RegisterProps {
  register: (name, email, password) => void;
  isAuthenticated: boolean;
}

const Register:React.FC<RegisterProps> = ({ register, isAuthenticated }) => {
  
  const [formData, setFormData] = useState<{
    name: string,
    email: string | number,
    password: string | number,
    password2: string
  }>({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    
    if (name === '' || email === '' || password === '') {
      alert('Please fill in all sections');
    } else {
    if (password !== password2) {
      alert('Passwords do not match');
    } else {
      register(name, email, password);
    }
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/film/dashboard' />;
  }

  return (
    <div className="auth-pages">
      <p className='lead'>Create Your Account</p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='lead'>
        Already have an account? <Link className="reg" to='/login'>Sign In</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(Register);