import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import homeReducer from './Homepage/homeReducer';

const rootReducer = combineReducers({
  homeReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
