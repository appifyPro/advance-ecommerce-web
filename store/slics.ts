import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../auth/firebase";


export const addevent = createAsyncThunk("addevent", async (item:any) => {
    try {
      if (!item) {
        alert("Please Enter todo");
      } else {
        let newTodo = {
          title: item.title,
          description:item.des,
          location:item.loc,
          invit:item.invit,

          createdAt: new Date().toLocaleDateString(),
          status: "inQueue",
        };
        console.log("my data in items is ",newTodo);
        
        await addDoc(collection(db, "todos"), newTodo);
        // console.log(newTodo);
        return newTodo;
      }
    } catch (error) {
      console.log(error);
    }
  });
  export const getTodo = createAsyncThunk("getTodo", async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
      let todosList:any = [];
      querySnapshot.forEach((doc) => {
        todosList.push({
          title: doc.data().title,
          description:doc.data().description,
          location:doc.data().location,
          inviting:doc.data().invit,

          createdAt: doc.data().createdAt,
          id: doc.id,
          status: doc.data().status,
        });
      });
  
      return todosList;
    } catch (error) {
      console.log(error);
    }
  });
  export const deletedata = createAsyncThunk("deleteTodo", async (item:any) => {
    try {
      await deleteDoc(doc(db, "todos", item.id));
      return item;
    } catch (error) {
      console.log(error);
    }
  });

//   const todoSlice = createSlice({
//     name: "addevent",
//     initialState: { todos: [], error: null },
//     reducers:{},
//     extraReducers: (builder) => {
//       builder.addCase(addevent.fulfilled, (state, action) => {
//         let newState = {
//           ...state,
//           todos: [action.payload, ...state.todos],
//         };
//         return newState;
//       });
//     }
const addmyevent=createSlice(
    {
        name:"addevent",
           initialState:{todos:[]},

           reducers:{},
           extraReducers:(builder)=>{
            builder.addCase(addevent.fulfilled,(state:any,action)=>
            {
                
                
                console.log("state is :",action.payload);
    
                let newState={
                    ...state,
                    todos:[...state.todos, action.payload]
                    //console.log("initial state",state.todos);
                }
                console.log("New State ", newState)
                return newState
            }  
            )
              builder.addCase(getTodo.fulfilled, (state, action) => {
            let newState = {
              ...state,
              todos: action.payload,
            };
           // state=newstate
             return newState;
          });
          builder.addCase(deletedata.fulfilled, (state, action) => {
            const todos = state.todos;
            const item = action.payload;
            let filteredTodos = todos.filter((todo:any) => item.id !== todo.id);
            let newState = {
              ...state,
              todos: filteredTodos,
            };
            return newState;
          });
           }
         

    }
)
export const {} = addmyevent.actions;
export default addmyevent.reducer;