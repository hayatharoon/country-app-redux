import { createStore, combineReducers } from 'redux';

import countryReducer from './country';
import authReducer from './auth';

const reducer = combineReducers({
  authReducer,
  countryReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
