/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  increment,
  decrement,
  selectCount,
  selectTodos,
  selectCountIncrement,
} from "./counterSlice";

export function Counter() {
  const [input, setInput] = useState("");
  const todos = useSelector(selectTodos);
  const count = useSelector(selectCount);
  const value = useSelector(selectCountIncrement);

  const dispatch = useDispatch();

  const handleData = () => {
    dispatch(addTodo(input));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{value}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleData}>click</button>
      </div>
      <div>
        {count > 0 &&
          todos.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.text}</p>
              </div>
            );
          })}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}
