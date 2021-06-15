import React,{useState} from 'react'
import './Input.css'
import {useDispatch} from 'react-redux'
// import { act } from 'react-dom/test-utils'

const Input = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const addTodo = () => {
        if (input.trim()) {
            dispatch({ type: "add", payload: input })
            setInput(' ')

       }



    }
    return (
        <div className="input">
            <input type="text" placeholder='Enter What To Do' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            
        </div>
    )
}

export default Input
