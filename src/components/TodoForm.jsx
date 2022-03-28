import React, {useState} from 'react';
import { toast } from 'react-toastify';


const TodoForm = (props) => {
    const [todoValue, setTodoValue] = useState('');


    const handleChange = (e) => {
        setTodoValue(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleSubmit();
        setTodoValue('');
    }

    const handleSubmit = (e) => {
        setTodoValue(todoValue.trim());

        if(!todoValue){
            toast.error('Please enter a todo!')
            return;
        }
        if(props.todos.includes(todoValue)){
            toast.error('Todo already exist!');
            return;
        }

        if(todoValue.length < 3){
            toast.error('Todo must be at least 3 characters long!');
            return;
        }

        if(todoValue){
            props.setTodos(prevValues => [...prevValues, todoValue]);
            toast.success('Todo added!')
        }
    }



  return (
    <form action='' id='todo-form'>
        <input type="text" id='form-input' value={todoValue} placeholder='Please Enter Your Todo' onChange={handleChange} />
        <button onClick={handleClick}>
            <i className="fa-solid fa-plus"></i>
        </button>
    </form>
  )
}

export default TodoForm;