import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks
          .sort((a, b) => a.localeCompare(b)) // Sort tasks in ascending order
          .map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => removeTask(index)}>Delete</button>
              <button
                onClick={() => {
                  const editedTask = prompt('Edit Task:', task);
                  if (editedTask !== null) {
                    editTask(index, editedTask);
                  }
                }}
              >
                Edit
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
