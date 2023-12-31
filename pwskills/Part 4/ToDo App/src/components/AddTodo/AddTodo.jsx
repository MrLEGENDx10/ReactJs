
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  
  const [todoText, setTodoText] = useState('');
  
  const dispatch = useDispatch();

  const addText = () => {
    dispatch({type:'ADD_TODO',payload:{todoText}});
    setTodoText('');
  }

  const capitalizeFirstLetter = (string)=>{
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  }


  return (                          
    <>
    <input type="text" value={todoText} name="TodoText" 
    className="m-2 px-3 py-2 bg-white border-2 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:blue-red-200 focus:ring-1 rounded-md sm:text-sm capitalize
    " placeholder="add your Todo" 
    onChange={(e) => setTodoText(capitalizeFirstLetter(e.target.value))} />

    <button type="button" 
    className=" px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " 
    onClick={addText}>Add</button>
    </>
  )
}



export default AddTodo