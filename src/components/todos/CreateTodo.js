import React, { Component } from 'react'
import {connect} from 'react-redux'
import addTodo from '../../actions/addTodo'


class CreateTodo extends Component {

  state = {
    text: ''
  }
  
  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
         <form onSubmit={this.handleSubmit.bind(this)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange.bind(this)} value={this.state.text}/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(null,mapDispatchToProps)(CreateTodo);
