import Register from './Register.jsx';

const mapStateToProps = (state) => {
  // return {
  //   todos: getVisibleTodos(state.todos, state.visibilityFilter)
  // }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleForm: (formmData) => {
      dispatch(createUser(formData))
    }
  }
}

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)