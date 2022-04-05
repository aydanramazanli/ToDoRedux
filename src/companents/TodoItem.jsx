import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      // 13 = enter key code 
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 0.1 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 0.2 } }}
      whileHover={{
        scale: 0.8,
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
      }}
      key={item.id}
     
    >
      <textarea
       className="px-3 py-1 rounded-sm text-slate-500 outline-0"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
      
          <AiFillEdit />
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
       
          <IoClose />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;
