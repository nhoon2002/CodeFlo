import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";
import { sessionReducer } from "./sessReducer";
import { searchTextReducer } from "./taskReducers";
import { showCompletedReducer } from "./taskReducers";
import { todosReducer } from "./taskReducers";

import { regErrReducer } from "./regErrReducer";
import { regReducer } from "./regReducer";
import { checkSession } from "./checkSession";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
	regErrReducer,
	checkSession,
	regReducer,
	searchTextReducer,
	searchTextReducer,
	todosReducer,
	modalReducer,
	routing: routerReducer
});
export default rootReducer;
