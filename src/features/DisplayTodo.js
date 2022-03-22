import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddTodo, Redo, SetTodo, Undo } from './TodoSlice'

export default function DisplayTodo() {
const todolist =useSelector((state)=>state.todo.value)
const dispatch =useDispatch()
const [StateforReader , setStateForReander]=useState(true)
const [filter,setFilter]=useState('All')



const ChangeStatus=(index)=>
{
    const data=todolist.map((itms,i)=>i===index ? ({...itms,active:!itms.active}):itms)
    dispatch(SetTodo(data))
        
}
  return (
    <div>
       <div style={{margin:"20px"}}>
            <button onClick={()=>setFilter('All')}>All</button>
            <button onClick={()=>setFilter("Active")}>Active</button>
            <button onClick={()=>setFilter("Completed")}>Completed</button>
       </div>
                <div>
                    <button onClick={()=>dispatch(Undo())}>undo</button>
                    <button onClick={()=>dispatch(Redo())}>redo</button>
                </div>
       <div  style={{margin:"20px"}}>
           {todolist.map((itms,i)=>
                filter==='All'?
                <li key={i}>{itms.todo}{"   "}<button style={{backgroundColor:itms.active?"green":"gray"}} onClick={()=>{ChangeStatus(i) ;setStateForReander(!StateforReader)}}>{itms.active ? "active":"completed"}</button> </li>:
                
                filter==="Active" && itms.active===true ?
                <li key={i}>{itms.todo}{"   "}<button  style={{backgroundColor:itms.active?"green":"gray"}} onClick={()=>{ChangeStatus(i);setStateForReander(!StateforReader)}}>active</button> </li>:

                filter==="Completed" && itms.active===false &&
                <li key={i}>{itms.todo}{"   "}<button  style={{backgroundColor:itms.active?"green":"gray"}} onClick={()=>{ChangeStatus(i);setStateForReander(!StateforReader)}}>active</button> </li>
                )}
       </div>
    </div>
  )
}
