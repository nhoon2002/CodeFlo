export function checkSession(state = {
		isLoggedIn: false,
		sessionUserID: ""
	}, action) {

	switch(action.type){
		case "SESSION_EXIST": {
			console.log("ACTION PAYLOAD CHECK SESSION", action.payload);

			return {
				...state,
				isLoggedIn: true,
				sessionUserID: action.payload
			}
		}
		case "NO_SESSION": {
			return {
				...state,
				isLoggedIn: false,
				sessionUserID: null
			}
		}
		default: {
			return state;
		}
	}

	return state;
}