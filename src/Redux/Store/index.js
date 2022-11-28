import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducers from '../Reducer/userReducers';

const allReducer = combineReducers({
  user: userReducers
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store