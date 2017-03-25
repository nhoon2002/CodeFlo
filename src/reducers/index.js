import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import users from "./userReducer";


import { regErrReducer } from "./regErrReducer";
import { checkSession } from "./checkSession";
import { modalReducer } from "./modalReducer";

// import { loginReducer } from "./loginReducer";
import { teamCreateReducer } from "./teamCreateReducer";
// import { teamUpdateReducer } from "./teamUpdateReducer";


const rootReducer = combineReducers({
	regErrReducer,
	modalReducer,
	checkSession,
	teamCreateReducer,
	routing: routerReducer
});
export default rootReducer;
