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
			}
		});
	}
}