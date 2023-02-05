import React from "react";
import "./TaskToDo.css";

export default function TaskToDo({ title, description }) {
  return (
    <div className="task-to-do-container">
      <div className="task-to-do-contents">
        <h1 className="task-to-do-title">{title}</h1>
        <div className="task-to-do-description">{description}</div>
        <div className="task-to-do-buttons">
          <div>Cacnel</div>
          <div>Done</div>
        </div>
      </div>
    </div>
  );
}
