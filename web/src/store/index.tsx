import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import combineReducers from './content/index';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initStore = createStore(
    combineReducers,
    composeEnhancers(applyMiddleware(thunk)),
)
