import React,{useState} from 'react';
import './TodoItemsContainer.css';


const TodoItemsContainer = ({todos,setTodos,EditTodo,input}) => {
  const[store,setStore]=useState('');
  const handleDelete=(id)=>
  {
    let dataAfterRemoval=todos.filter((eachValue)=>
    {
        return eachValue.id!==id
    })
    
    setTodos(dataAfterRemoval)
  }

  const handleEdit = (id) => {
    let newTodos = todos.find((ele) => ele.id === id);
  
    if (newTodos) {
      EditTodo(newTodos);
    } 
  };
  
  const handleClearAll=()=>
  {
    setTodos([])
  }

 

  const handleSelectAll = () => {
    const selectAll = todos.every((todo) => todo.checked); 
    setStore(selectAll)

    const updatedTodos = todos.map((value) => ({
      ...value,
      checked: !selectAll, 
    }));

    setTodos(updatedTodos);
  };

 
  return (
    <div className="list-container">
    <h4 className="heading">Todo Items</h4>
    {
      todos.length===0 ? <h6 style={{color:"red",marginTop:"10px"}}>The List is empty</h6> : ( <div>
        {
          store ? <button className="sel-all" onClick={handleSelectAll} >Select All</button> : <button className="desel-all" onClick={handleSelectAll} >Deselect All</button>
        }
        <button className="clear-all" onClick={handleClearAll}>Clear All</button> </div>)
    }
      
      
       <div className="todoItems">
        {
          todos.map((val) => {
            const {text,id,checked} = val;
            return <li className='todoItem' key={id}>
              <div className="left">
              <input type="checkbox" className="check" checked={checked}/>
              <span>{text}</span>
              </div>
              <div>
              <i className="fa-regular fa-pen-to-square fa-lg edit" onClick={()=>handleEdit(id)} style={{color:"#24471f"}} ></i>
              <i className="fa-regular fa-trash-can fa-lg del" onClick={()=>handleDelete(id)} style={{color:"#da2510"}}></i>
              </div>
            </li>
            
          })
        }
        </div>
      
    </div>
  );
};

export default TodoItemsContainer;


