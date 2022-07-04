// NOTE: use this store variable to create a store.

import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";


const rootReducer=combineReducers({
  AppReducer,
  authReducer
})
export const store = legacy_createStore(
  rootReducer,
 applyMiddleware(thunk)
)

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
