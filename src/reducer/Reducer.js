import { v4 as uuidv4 } from 'uuid';


const initialState = { todo: [{ id: uuidv4(), act: "Soccer", done: false }, { id: uuidv4(), act: "Basketball", done: false }],show:"all" }

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "add":
            return({todo:[...state.todo,{id:uuidv4(),act:payload,done:false}]})
        case "delete":
            return ({ todo: state.todo.filter((todo) => todo.id != payload) })
        case "change":
            return ({todo: state.todo.map((task)=>task.id==payload?{...task,done:!task.done}:task)})
        case "show":
            return ({ ...state, show: payload })
        case "update":
            return ({ todo: [...state.todo].map((task) => task.id == payload.id ? {...task,act:payload.newTask }:task)})
        default:
            return(state)

    }
}

export default reducer