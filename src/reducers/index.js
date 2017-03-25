import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";


import { regErrReducer } from "./regErrReducer";
import { registerReducer } from "./regReducer";
import { checkSession } from "./checkSession";
import { modalReducer } from "./modalReducer";
import { todosReducer } from "./todosReducer";
// import { loginReducer } from "./loginReducer";
import { teamCreateReducer } from "./teamCreateReducer";
// import { teamUpdateReducer } from "./teamUpdateReducer";


const rootReducer = combineReducers({
	regErrReducer,
	registerReducer,
	modalReducer,
	checkSession,
	// loginReducer,
	teamCreateReducer,
	todosReducer,
	routing: routerReducer
});
export default rootReducer;
