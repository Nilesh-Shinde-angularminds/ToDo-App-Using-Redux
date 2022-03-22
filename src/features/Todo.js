import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo } from './TodoSlice'


export default function Todo() {
const todo =useSelector((state)=>state.todo.value)
const AllStates = useSelector((state)=>state)
// console.log(AllStates.todo.undoArray)
console.log( AllStates.todo.undoArray)
console.log( AllStates.todo.redoArray)

const dispatch =useDispatch()
const [inputTodo,setInputTodo]=useState('')

  return (
    <div>
            <input value={inputTodo} onChange={(e)=>setInputTodo(e.target.value)} />
            <label> <button onClick={()=>dispatch(AddTodo({todo:inputTodo,active:true}))}>Add Todo</button></label>



    </div>
  )
}
