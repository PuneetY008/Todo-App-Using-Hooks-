import React, { useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, editToggle }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        editToggle();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
