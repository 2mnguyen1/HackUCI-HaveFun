import React from "react";
import "./TaskToDo.css";

export default function TaskToDo({
  title,
  description,
  deleteTodo,
  id,
  setTasks,
  doneTodo,
  isDone,
}) {
  return (
    <div className="task-to-do-container">
      <div className="task-to-do-contents">
        {!isDone ? (
          <>
            <h1 className="task-to-do-title">{title}</h1>
            <div className="task-to-do-description">{description}</div>{" "}
          </>
        ) : (
          <div>
            <strike>
              <h1 className="task-to-do-title">{title}</h1>
            </strike>
            <strike>
              <div className="task-to-do-description">{description}</div>
            </strike>
          </div>
        )}

        <div className="task-to-do-buttons">
          <div
            onClick={() => {
              deleteTodo(id);
              setTasks((prev) => {
                return prev.map((ele) => ele._id != id && ele);
              });
            }}
          >
            Cancel
          </div>
          <div
            onClick={() => {
              doneTodo(id);
              setTasks((prev) => {
                return prev.map((ele) =>
                  ele._id == id ? { ...ele, isDone: true } : ele
                );
              });
            }}
          >
            Done
          </div>
        </div>
      </div>
    </div>
  );
}
