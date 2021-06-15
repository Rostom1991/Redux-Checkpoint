import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const DisplayTodos = () => {
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todo)
  const show = useSelector(state => state.show)
  
  const deletefunc = (id) => {
    dispatch({ type: "delete", payload:id })
  }

  const taskState = (id) => {
    dispatch({type:"change", payload:id})
  }

  const editfunc = (act) => {
    dispatch ({type:"edit",payload:act})
  }

  const filter = () => {
    if (show == "done") {
      return(todo.filter((todo)=>todo.done ==true))
    }
     if (show == "notDone") {
      return(todo.filter((todo)=>todo.done ==false))
    }
    return (todo)
  }
  

    return (
      <div className="display">
        <h1 className="heading">Todo List</h1>
              {(filter()).map((todo, i) => {
                return (
                  <div className="delete" key={i}>
                    <p style={todo.done === true ? { textDecoration: "line-through" } : {}} onClick={()=>taskState(todo.id)}>{todo.act}</p>
                    <div className="buttons">
                    <button onClick={() => deletefunc(todo.id)}>Delete</button>

                    <button onClick={() => editfunc(todo.act)}>Edit</button></div>

                    
                  </div>

        )
      })}
        </div>
    )
}

export default DisplayTodos
