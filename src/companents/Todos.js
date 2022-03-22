import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addToDo} from '../redux/reducer'

const mapStateToProps =(state) =>{
    return {
        todo:state  //birinci hisse variable secirsen
    }
}
const mapDispatchToProps=(dispatch) =>{
    return {
        addToDo:(obj)=>dispatch(addToDo(obj))
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
        <button>
            Add
        </button>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)