import { createSlice } from "@reduxjs/toolkit"

const todoSlice= createSlice({

    name:'todo',
    initialState:{
                 value:[],
                 undoArray:[[]],
                 redoArray:[]
                    },
    reducers:{

            AddTodo:(state,action) => {state.value.push(action.payload) ; state.undoArray=([...state.undoArray , state.value]) },
            SetTodo:(state,action)=>{state.value=action.payload ; state.undoArray=([...state.undoArray , state.value]) }
        
            ,Undo:(state)=>{
               if( state.undoArray.length>1) 
                 { const data = state.undoArray.pop()
                 state.value=state.undoArray[state.undoArray.length-1]

                 data && state.redoArray.push(data)
                }
               
               
               
                 }
             ,Redo:(state)=>{
                //  const data=state.redoArray.pop()
                //  state.redoArray.length>0 && ( state.value=data)

                //  data && state.undoArray.push(data)
                if( state.redoArray.length>0) 
                 { const data = state.redoArray.pop()
                    state.value=data

                 data && state.undoArray.push(data)
                }
               
             }    

        
    }             
})

export const {AddTodo,SetTodo,Undo, Redo} = todoSlice.actions
export default todoSlice.reducer