import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";
import { registerReducer } from "./registerReducer";
import { sessionReducer } from "./sessReducer"

const rootReducer = combineReducers({
	registerReducer,
	sessionReducer,
	routing: routerReducer
});
export default rootReducer;