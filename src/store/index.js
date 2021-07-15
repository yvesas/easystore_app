import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import appReducer from '../redurces/index'
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  storeEnhancers(applyMiddleware(thunk))
);

export default store;