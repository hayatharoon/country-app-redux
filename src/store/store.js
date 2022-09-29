import { createStore, combineReducers } from 'redux';

import countryReducer from './country';
import authReducer from './auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
  authReducer,
  countryReducer,
});

const persistConfig = {
  key: 'country-app',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

export default store;
export { persistor };
