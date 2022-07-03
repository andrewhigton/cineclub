import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import { stripePromise } from './utils/stripe.utils';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const stripePromise = loadStripe('pk_test_GxoLwpaJRAn1kdTQGlL8EwZa00qqtVHbM3');

ReactDOM.render(
	
	<Provider store={store}>
	<PersistGate persistor={persistor}>
	<Elements stripe={stripePromise} >
	<App />
	</Elements>
	</PersistGate>
	</Provider>,
	document.getElementById('root')
	);