import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import film from './film';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'film']
}

const rootReducer = combineReducers({
	auth,
	film,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;