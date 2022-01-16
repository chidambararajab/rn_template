import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { exampleReducer } from "../reducers/exampleReducer";

const reducer = combineReducers({
  exampleList: exampleReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
