import { createStore, compose, applyMiddleware, Reducer } from 'redux';
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist'
import PostsReducer from './content/index';
import storage from 'redux-persist/lib/storage' 

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, (PostsReducer as Reducer))

const initStore = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
)

const persistor = persistStore(initStore)

export { initStore, persistor }
