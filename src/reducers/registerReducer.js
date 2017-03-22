//Make a reducer file for each state in the store (which is like the main database for redux)
//Every reducer runs every time there is an action, whether something actually changes in state is up to
//programmer.

//Reducer does the editing of the state, which is just a slice of data of the entire store.

//Everytime an action is dispatched, every single reducer will run. We control which reducers do something with the action types
export function registerReducer(state={ errorMsgs: "" }, action ) {

	switch (action.type) {
		case "ERROR_MSGS": {
			console.log("ERROR PAYLOAD", action.payload)
			return { 
				...state,
				errorMsgs: action.payload 
			}
		}
		// case "GET_USER": {
		// 	return { ...state, user: }
		// }
		// case "GET_USER_ERROR": {
		// 	return {...state, error: payload.err }
		// }
		default: {
			return state;
		}
	}

	return state;
}

// export function allData(state = {}, action){
// 	return state;
// }