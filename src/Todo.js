
import React, { useState } from 'react';
import TodoItemsContainer from './TodoItemsContainer';

const Todo = () => {
  const [input, setInput] = useState({
    text: '',
    id: '',
  });

  const [todos, setTodos] = useState([]);
  
  const handleAdd = () => {
    
    if (input.id) {
      const updatedTodos = todos.map((todo) =>
        todo.id === input.id ? { ...todo, text: input.text } : todo
      );
      
      setTodos(updatedTodos);
    } 
    else {
      if (input.text.trim() === '') {
        alert('Enter some input');
        return;
      }
      else{
        const newTodo = {
          text: input.text,
          id: new Date().getTime().toString(),
        };
        setTodos([...todos, newTodo]);
      }
    }
    
    setInput({ text: '', id: '' });
  };

  const handleEditTodo = (val) => {
    setInput({
      text: val.text,
      id: val.id,
    });
  };

  const handleDataOnCancel=()=>
  {
     setInput({
      text:'',
      id:''
     })
  }

  return (
    <>
      <div>
        <div className="text-center mt-5">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Todo
          </button>
        </div>

        <div className="modal fade" id="exampleModal" 
        data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Todos
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  value={input.text} style={{width:"20vw"}} placeholder="Enter Some Input"
                  onChange={(e) => setInput({ ...input, text: e.target.value })}
                />
              
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDataOnCancel}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleAdd} data-bs-dismiss="modal">
                  Enter
                </button>
              </div>
              
            </div>
          </div>
        </div>
        

        <TodoItemsContainer todos={todos} setTodos={setTodos} EditTodo={handleEditTodo} input={input}/>
      </div>
    </>
  );
};

export default Todo;





