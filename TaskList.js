import React from 'react';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <div>
            <strong>{task.name}</strong>
            <p>{task.description}</p>
          </div>
          <div>
            <button onClick={() => onCompleteTask(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
