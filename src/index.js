import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  return (
    <>
      <h2>Нужно залогиниться!</h2>
      <button>Войти</button>
      <button>Выйqqqти</button>
    </>
  );
}

render(<App />, document.querySelector("#root"));
