import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import  {initialState}  from '../initialStates';

export default createStore(combineReducers(rootReducer), initialState, composeWithDevTools(applyMiddleware(thunk)));

