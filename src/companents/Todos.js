import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo, removeTodo, updateTodo , completeTodo} from "../redux/reducer";
import ToDoItems from "./ToDoItems";

const mapStateToProps = (state) => {
  return {
    todo: state, //birinci hisse variable secirsen
  };
};

// from reducer
const mapDispatchToProps = (dispatch) => {
  return {
    addToDos: (obj) => dispatch(addToDo(obj)),
    removeTodos: (id) => dispatch(removeTodo(id)),
    updateTodos: (obj) => dispatch(updateTodo(obj)),
    completeTodos: (id) => dispatch(completeTodo(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");


  const inputValue = (e) => {
    setTodo(e.target.value);
  };
 
  


  return (
    <div className="Todos">
      <input
        type="text"
        onChange={(e) => inputValue(e)}
        className="todo-input"
      />
      {/* add list */}
      <button
        onClick={() =>
          props.addToDos({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>

      <br />
      {/* <ul>
        {props.todo.map((elem) => {
          return (
          <ToDoItems />
          );
        })}
      </ul> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
