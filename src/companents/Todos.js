import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addToDo, removeTodo} from '../redux/reducer'

const mapStateToProps =(state) =>{
    return {
        todo:state  //birinci hisse variable secirsen
    }
}

// from reducer
const mapDispatchToProps=(dispatch) =>{
    return {
        addToDos:(obj)=>dispatch(addToDo(obj)),
        removeTodos:(id)=>dispatch(removeTodo(id))
    }

}
const Todos = (props) => {
    const [todo, setTodo] =useState("")

    const inputValue =(e)=>{
        setTodo(e.target.value)
    }

    console.log(props)
  return (

    <div className="Todos"
    >
        <input type='text' onChange={(e)=>inputValue(e)} className="todo-input"/>
        {/* add list */}
        <button onClick={()=>props.addToDos({
              id:Math.floor(Math.random()*1000)  ,
              item:todo,
              completed:false,
        })}>
            Add
        </button>


<br/>
        <ul>
            {
            props.todo.map((elem)=>{
                return(
                    <li key={elem.id}>
                        {elem.item}
                        <button
                        onClick={()=>{props.removeTodos(elem.id)}}
                        >Delete</button>
                    </li>
                )
            })
            }
        </ul>

    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)