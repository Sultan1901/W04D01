import React from "react";
import "./style.css";

class TodoItem extends React.Component {
  render() {
    return (
      <>
        <li className="todoItem">
          <h3 className="name">{this.props.todo.name}</h3>
          <h3
            className="close"
            onClick={() => this.props.handleDelete(this.props.todo.id)}
          >
            X
          </h3>
          <p>{this.props.money}</p>
        </li>
      </>
    );
  }
}

export default TodoItem;
