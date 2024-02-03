// import React from "react";
// import Task from "./Task";

// function TaskList({ tasks,filteredCategory }) {

//   const filteredTasks = filteredCategory === "ALL" ? tasks :tasks.filter(task => task.category === filteredCategory);
  
//   return (
//     <div className="tasks">

//       {filteredTasks.map((task) => (
//         <Task key = {task.id} task={task} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;


import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
