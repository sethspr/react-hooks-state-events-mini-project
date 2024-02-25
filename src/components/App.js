import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]); // creates new task object & assigns a unique 'id'. which is 1 more than the current #id of tasks
  };

  const handleDeleteTask = (xButtonDelete) => {
    setTasks(tasks.filter((task) => task !== xButtonDelete));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // console.log(selectedCategory);
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  // console.log(filteredTasks);
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList
        tasks={filteredTasks}
        setTasks={setTasks}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}
export default App;
