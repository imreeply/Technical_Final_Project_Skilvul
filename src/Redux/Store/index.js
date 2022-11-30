import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducers from "../Reducer/userReducers";
import harapanReducers from "../Reducer/harapanReducers";

const allReducer = combineReducers({
  harapan: harapanReducers,
  user: userReducers,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
