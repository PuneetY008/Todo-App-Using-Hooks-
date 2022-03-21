import React from 'react';
import{ListItem,ListItemText,Checkbox,IconButton,ListItemSecondaryAction} from '@material-ui/core';
import { Delete,Edit } from '@material-ui/icons';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';

function Todo({task ,completed,removeTodo,id, toggleTodo,editTodo}){
    const [isEditing,toggle] = useToggle(false);
    return(
        <ListItem style={{height: '64px'}}>
            {isEditing? <EditTodoForm editTodo={editTodo} id={id} task={task} editToggle={toggle} /> :
                <>
                <Checkbox checked={completed} tabIndex={-1} onClick={()=> toggleTodo(id)} />
                <ListItemText style={{textDecoration: completed? 'line-through': 'none'}}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Delete' onClick={()=> removeTodo(id)}>
                        <Delete />
                    </IconButton>
                    <IconButton aria-label='Edit' onClick={toggle}>
                        <Edit />
                    </IconButton>
                </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    );
}

export default Todo;