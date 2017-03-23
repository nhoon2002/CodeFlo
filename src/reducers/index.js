import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";
import { registerReducer } from "./registerReducer";
import { sessionReducer } from "./sessReducer";
import { taskReducers } from "./taskReducers";

const rootReducer = combineReducers({
	registerReducer,
	sessionReducer,
	taskReducers
	routing: routerReducer
});
export default rootReducer;
