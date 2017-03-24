import axios from 'axios';
import { browserHistory } from "react-router";


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
					sessionUserInfo: data.data.sessionInfo,
					user: data.data.user
					}
				});

				dispatch({ type: "SUCC_CLR_ERRS" });

				dispatch({ type: "CLOSE_MODAL", payload: false });
			}
		});
	}
}

// SEND BACK USER SESSION INFO ALSO ON "ONENTER"  // SEND BACK USER SESSION INFO ALSO ON "ONENTER" 
export function checkSession() {
	return function(dispatch) {
		axios.get('/checkssion').then((data) => {
			console.log("CHECK SESSION DATA", data);
			if(data.data.sessionUserId){
				dispatch({ type: "SESSION_EXIST", payload: { 
						checkSessionId : data.data.sessionUserId,
						checkSessionUser: data.data.sessionUserInfo 
					} 
				});
			}else{
				dispatch({ type: "NO_SESSION" })
			}
		});
	}
}

export function login(loginInput) {
	return function(dispatch) {

		axios.post('/login', loginInput).then((data) => {
			console.log("USER AFTER LOGIN", data);
			if(data){
				dispatch({ type: "SESSION_EXIST", payload: {
		            checkSessionId: data.data.sessionUserId,
				    checkSessionUser: data.data.sessionInfo	
				    } 
				});
			}else{
				dispatch({ type: "NO_SESSION" })
			}
		})
		// .catch((err) => {
		// 	debugger;
		// });
		
	}
}

export function logout(){
	return function(dispatch) {
		axios.get('/logout').then((data) => {
			dispatch({ type: "NO_SESSION" });
			dispatch({ type: "DESTROY_REGIST_SESS" });
			browserHistory.push('/');
		});
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