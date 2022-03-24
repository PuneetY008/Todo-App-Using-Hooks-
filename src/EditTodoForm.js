import React, { useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, editToggle }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
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
