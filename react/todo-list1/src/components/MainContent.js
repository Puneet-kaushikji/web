import React, { useState } from 'react';

const MainContent = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); // Clear the input field after adding the task
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div >
      <div className='m-5 text-2xl flex justify-center items-center h-full w-full'>
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter your task"
          className="bg-gray-600 placeholder-slate-100 rounded-md p-2"
        /> 
        <br />

        <button 
          onClick={addTask}  
          className='border-solid border-2 border-black rounded-xl bg-green-400 text-2xl p-1'
        >
          ADD 
        </button>
      </div>
   
      <ul className="list-disc flex justify-center items-center flex-col">
        {tasks.map((task, index) => (
          <li key={index} className="text-lg text-gray-800 flex items-center">
            <div className=' border-4  bg-gray-200 m-1  w-64 rounded-md'>
              {task}
              </div>
            <button 
              onClick={() => deleteTask(index)} 
              className="ml-2 bg-red-500 text-white rounded-md p-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
