import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

function EditTodoForm({editTodo,id,task,editToggle}){
    const [value,handleChange,reset] = useInputState(task);
    return(
        <form onSubmit={(e)=> {
            e.preventDefault();
            editTodo(id,value);
            reset();
            editToggle();
        }}
        style={{marginLeft: "1rem",width: "50%"}}
        >
            <TextField 
            margin='normal' 
            value={value} 
            onChange={handleChange} 
            fullWidth
            autoFocus
            />
        </form>
        
    );
}

export default EditTodoForm;