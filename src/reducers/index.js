import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";
import { sessionReducer } from "./sessReducer";
import { taskReducers } from "./taskReducers";
import { regErrReducer } from "./regErrReducer";
import { regReducer } from "./regReducer";
import { checkSession } from "./checkSession";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
	regErrReducer,
	checkSession,
	registerReducer,
	taskReducers,
	modalReducer,
	routing: routerReducer
});
export default rootReducer;
