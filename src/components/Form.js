import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import  { addTodo }from '../redux/todos/todosSlice';

function Form() {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    if (!title) return;
    e.preventDefault();

  dispatch(addTodo({ id:nanoid(), title, completed:false}))

  setTitle('');
  
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className="new-todo" placeholder="Add Task" autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>
        </form>
    </div>
  )
}

export default Form