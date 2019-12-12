import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const middlewares = _ENV === 'production' ? [thunk] : [thunk, logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
