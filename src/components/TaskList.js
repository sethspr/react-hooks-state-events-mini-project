import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, setTasks, onDelete }) => {
  // console.log(tasks)
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          setTasks={setTasks}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
