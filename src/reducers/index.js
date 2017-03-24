import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";


import { regErrReducer } from "./regErrReducer";
import { registerReducer } from "./regReducer";
import { checkSession } from "./checkSession";
import { modalReducer } from "./modalReducer";
import { loginReducer } from "./loginReducer";


const rootReducer = combineReducers({
	regErrReducer,
	registerReducer,
	modalReducer,
	checkSession,
	loginReducer,
	routing: routerReducer
});
export default rootReducer;
