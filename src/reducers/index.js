import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";
import { regErrReducer } from "./regErrReducer";
import { registerReducer } from "./regReducer";
import { checkSession } from "./checkSession";

const rootReducer = combineReducers({
	regErrReducer,
	registerReducer,
	checkSession,
	routing: routerReducer
});
export default rootReducer;