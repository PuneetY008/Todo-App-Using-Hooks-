import React, { useContext } from "react";
import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.context";

function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
