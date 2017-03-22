//Make a reducer file for each state in the store (which is like the main database for redux)
//Every reducer runs every time there is an action, whether something actually changes in state is up to
//programmer.

//Reducer does the editing of the state, which is just a slice of data of the entire store.

//Everytime an action is dispatched, every single reducer will run. We control which reducers do something with the action types
export function registerReducer(state={
		isLoggedIn: false,
		sessionUserID: "",
		user: ""
	}, action ) {

	switch (action.type) {
		case "SET_REGIST_SESS": {
			console.log("ACTION PAYLOAD SUCCES REGISTER", action.payload);
			// req.session.isLogged = true;
			// req.session.user_id = action.payload.id;
			return { ...state, 
				isLoggedIn: true,
				sessionUserID: action.payload.sessionUserId,
				user: action.payload.user
			}
		}
		default: {
			return state;
		}
	}

	return state;
}

// export function allData(state = {}, action){
// 	return state;
// }