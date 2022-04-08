import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //cant set this to token on first login 
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;