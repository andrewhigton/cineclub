import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import film from './film';

export type RootState = ReturnType<typeof rootReducer>;

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

