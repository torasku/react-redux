import AddTodoForm from '../components/addTodoForm.jsx';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actionCreators.js';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text))
    }
  }
}

let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodo
