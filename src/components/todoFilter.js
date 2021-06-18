import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
const TodoFilter = () => {
    const dispatch = useDispatch()
    return (
        <div className="done">
            <button onClick={()=>dispatch({type:"show",payload:"done"})}>Done</button>
            <button onClick={()=>dispatch({type:"show",payload:"notDone"})}>Not Done</button>
            <button onClick={()=>dispatch({type:"show",payload:"all"})}>All</button>
            
            
            
        </div>
    )
}
export default TodoFilter