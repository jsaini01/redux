/** @format */

import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import { Counter } from "./features/counter/counter";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
