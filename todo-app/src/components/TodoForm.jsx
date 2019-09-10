import React, { useContext } from "react";

export default function TodoForm(props) {
  const { inputText, changeHandler, clearCompleted } = props;
  return (
    <div className="TodoForm">
      <form onSubmit={props.submitHandler}>
        <input
          type="text"
          placeholder="add todo..."
          onChange={changeHandler}
          value={inputText}
        ></input>
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
