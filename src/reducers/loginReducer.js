export function loginReducer(state={
		user: ""
	}, action) {

	switch(action.type){
		case "LOGGED_IN": {
			return {
				...state,
				user: action.payload
			}
		}
		default: {
			return state
		}
	}
	return state;
}