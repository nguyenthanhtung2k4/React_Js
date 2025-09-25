import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
      name: "todos",
      initialState: [
            {id:'21323',text:'python',done:false },
            {id:'54',text:'JavaScript',done:false },
            {id:'2134523',text:'C#',done:false },
            {id:'2134523',text:'C++',done:false },
      ],
      reducers: {
            addTodo: {
                  reducer: (state, action) => {
                        state.push(action.payload);
                  },
                  prepare: (text) => {
                        return { payload: { id: nanoid(), text, done: false } };
                  }
            },
            toggleTodo: (state, action) => {
                  const todo = state.find((t) => t.id === action.payload);
                  if (todo) todo.done = !todo.done;
            },
            deleteTodo: (state, action) => {
                  return state.filter((t) => t.id !== action.payload);
            }
      }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
