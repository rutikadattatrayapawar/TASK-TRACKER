import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'taskName') {
      setTaskName(value);
    } else if (name === 'taskDescription') {
      setTaskDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '' || taskDescription.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    onAddTask({ name: taskName, description: taskDescription });
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          name="taskName"
          value={taskName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Task Description:</label>
        <input
          type="text"
          name="taskDescription"
          value={taskDescription}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

