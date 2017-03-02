import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

// If we were not using bindActionCreators, this App component would be useless,
// We would have to call directly this.props.dispatch() with an action function in it
// this.props.dispatch(addTodo("My new todo"))

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// App will link props directly to Main
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
