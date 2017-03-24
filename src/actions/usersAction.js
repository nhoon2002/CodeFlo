import axios from 'axios';


export function createUser(formData) {
	return function(dispatch) {
		axios.post('/register', formData).then((data) => {
			console.log("RETURN DATA FROM AXIOS REGISTER POST", data);
			console.log('\n\n');
			console.log("RETURNed DATA ERRORS", data.data);
			console.log('\n\n');
			if(data.data.length > 0){
				dispatch({ type: "ERROR_MSGS", payload: data.data })
			}else{
				console.log("INSIDE CREATE USER ELSE", data)
				dispatch({ type: "SET_REGIST_SESS", payload: {
					sessionUserId: data.data.sessionUserId,
					user: data.data.data
					}
				});

				dispatch({ type: "SUCC_CLR_ERRS" });

				dispatch({ type: "CLOSE_MODAL", payload: false });
			}
		});
	}
}
export function createTeam(formData) {
	return function(dispatch) {
		axios.post('/teams', formData).then((data) => {
			console.log("RETURN DATA FROM AXIOS TEAM POST", data);
			console.log('\n\n');
			console.log("RETURNed DATA ERRORS", data.data);
			console.log('\n\n');
				// TODO: Dispaych Something here.
				// dispatch({ type: "SET_REGIST_SESS", payload: {
				// 	sessionUserId: data.data.sessionUserId,
				// 	user: data.data.data
				// 	}
				// });
				//
				// dispatch({ type: "SUCC_CLR_ERRS" });
				//
				// dispatch({ type: "CLOSE_MODAL", payload: false });
			}
		);
	}
};

// SEND BACK USER SESSION INFO ALSO ON "ONENTER"  // SEND BACK USER SESSION INFO ALSO ON "ONENTER"
export function checkSession() {
	return function(dispatch) {
		axios.get('/checkssion').then((data) => {
			console.log("CHECK SESSION DATA", data);
			if(data.data.sessionUserId){
				dispatch({ type: "SESSION_EXIST", payload: data.data.sessionUserId });
			}else{
				dispatch({ type: "NO_SESSION" })

			}
		});
	}
}



export function openModal() {
	return function(dispatch) {
		dispatch({ type: "OPEN_MODAL", payload: true})
	}
}
export function closeModal() {
	return function(dispatch) {
		dispatch({ type: "CLOSE_MODAL", payload: false})

export function login(loginInput) {
	return function(dispatch) {

		axios.post('/login', loginInput).then((user) => {
			console.log("USER AFTER LOGIN", user);
			if(user){
				dispatch({ type: "LOGGED_IN", payload: user })
			}
		}).catch((err) => {
			debugger;
		});

	}
}

export function logout(){
	return function(dispatch) {
		axios.get('/logout').then((data) => {
			dispatch({ type: "NO_SESSION" })
			dispatch({ type: "DESTROY_REGIST_SESS" })
		})
	}
}

export function openModal() {
	return {
		type: "OPEN_MODAL",
		payload: true
	}
}

export function closeModal() {
	return {
		type: "CLOSE_MODAL",
		payload: false
	}
}

export function openModalL() {
	return {
		type: "OPEN_MODAL_LOG",
		payload: true
	}
}

export function closeModalL() {
	return {
		type: "CLOSE_MODAL_LOG",
		payload: false
	}
}
export function openModalT() {
	return {
		type: "OPEN_MODAL_TEAM",
		payload: true
	}
}

export function closeModalT() {
	return {
		type: "CLOSE_MODAL_TEAM",
		payload: false

	}
}
