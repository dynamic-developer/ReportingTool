import { combineReducers } from 'redux'
import logginReducer from './login';

export const allReducers = combineReducers({
   auth: logginReducer,
});

