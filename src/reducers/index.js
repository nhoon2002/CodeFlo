import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";

import { regErrReducer } from "./regErrReducer";
import { registerReducer } from "./regReducer";
import { checkSession } from "./checkSession";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
	regErrReducer,
	registerReducer,
	checkSession,
	modalReducer,
	routing: routerReducer
});
export default rootReducer;
