/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "todo",
  initialState: {
    value: 0,
    todos: [],
  },

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
      };
      state.todos.push(todo);
      state.value += 1;
    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addTodo, increment, decrement, incrementByAmount } =
  counterSlice.actions;

export const selectTodos = (state) => state.todo.todos;
export const selectCount = (state) => state.todo.value;
export const selectCountIncrement = (state) => state.todo.value;

export default counterSlice.reducer;
