import React from 'react';
import { Paper,List,ListItem,Divider,ListItemText, } from '@material-ui/core';
import Todo from "./Todo";

function TodoList(props){
    if(props.todos.length)
    return (
        <Paper>
            <List>
                {props.todos.map((todo,i)=> (
                    <>
                    <Todo 
                    id={todo.id}
                    task={todo.task} 
                    key={todo.id} 
                    completed={todo.completed}
                    removeTodo={props.removeTodo} 
                    toggleTodo={props.toggleTodo}
                    editTodo={props.editTodo}
                    />
                    {i< props.todos.length-1 && <Divider />}
                    </>  
                ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;