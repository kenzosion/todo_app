import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

export default Todoitem;
