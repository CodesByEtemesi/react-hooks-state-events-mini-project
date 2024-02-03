// import React, {useState} from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";

// function App() {
//   const [tasks,setTasks] = useState(TASKS);
//   const [filteredCategory, setFilteredCategory] = useState("All");

//   const handleCategoryChange = (category) => {
//     setFilteredCategory(category);
//   };


//   const handleTaskFormSubmit = (newTask) => {
//     setTasks((prevTasks) => [...prevTasks, { newTask, id:prevTasks.length + 1 }]);
//   };



//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategpryChange} />
//       <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />

//       <TaskList tasks={tasks} filteredCategory={filteredCategory} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: prevTasks.length + 1 }]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} filteredCategory={filteredCategory} />
    </div>
  );
}

export default App;
