import React, {useRef} from 'react'

const ToDoItems = (props) => {
const {elem, updateTodos, removeTodos, completeTodos}= props;
const inputRef = useRef(true);


const inputFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  const update = (e, id, value) => {
    if (e.which === 13) {
      // 13 => enter key code
      updateTodos({ id, item: value });
      inputRef.current.disabled = true;
    }
}


  return (
    <li key={elem.id}>
    <textarea
      ref={inputRef}
      disabled={inputRef}
      defaultValue={elem.item}
      onKeyPress={(e) => update(e, elem.id, inputRef.current.value)}
    />
    <button onClick={() => inputFocus()}>Edit</button>
    <button onClick={() => completeTodos(elem.id)}>Complete</button>
    <button
      onClick={() => {
        removeTodos(elem.id);
      }}
    >
      Delete
    </button>
  </li>
  )
}

export default ToDoItems