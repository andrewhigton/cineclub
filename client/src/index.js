import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

ReactDOM.render(
	<Provider store={store}>
	<PersistGate persistor={persistor}>
	<App />
	</PersistGate>
	</Provider>,
	document.getElementById('root')
	);

	{/*<Provider store={store}>
	<App />
	</Provider>,*/}