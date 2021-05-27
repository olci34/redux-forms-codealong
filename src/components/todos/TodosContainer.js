import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    render() {
        console.log('rendered')
      return(
        <ul>
            {this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)}
        </ul>
      );
    }
};

const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
  
export default connect(mapStateToProps)(TodosContainer); 