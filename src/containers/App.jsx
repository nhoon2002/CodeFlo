import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionsCreators from '../actions/usersAction';
import Main from './Main.jsx';
// import { createUser } from '../actions/usersAction'
/*******************/
// Connects a React component to a Redux store. connect is a facade around connectAdvanced, providing a
// convenient API for the most common use cases.

// It does not modify the component class passed to it; instead, it returns a new, connected component class
// for you to use.
function mapStateToProps (state) {
	//The state parameter in the mapStateToProps is being brought in from the inital states defined
	//in the reducers.
	console.log("mapStateToProps DATA", state)
	return {
		allData: state,
		errorMsgs: state.regErrReducer.errorMsgs,
		userAfReg: state.registerReducer.user,
		sessionUserId: state.registerReducer.sessionUserID,
		isLoggedInReg: state.registerReducer.isLoggedIn,
		isLoggedInCheck: state.checkSession.isLoggedIn,
		CheckSeshUserID: state.checkSession.sessionUserID,
		showModal: state.modalReducer.showModal
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(actionsCreators, dispatch);

	// return {
	//     handleForm: (formData) => {
	//       dispatch(createUser(formData))
	//     }
	// }

}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);
/*******************/

export default App;
