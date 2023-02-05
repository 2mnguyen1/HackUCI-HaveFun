import React, { useState, useEffect } from "react";
import TaskToDo from "../components/taskToDo/TaskToDo";
import "./RightMainPage.css";
import axios from "axios";

export default function RightMainPage({ user }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await axios.get(
        `http://localhost:3001/api/post/todo/${user._id}/all`
      );
      setTasks(data.data);
    }
    getData();
  }, []);

  async function uploadTodo(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/post/todo/post/", {
      userId: user._id,
      title: title,
      description: description,
    });

    setTasks(prev=>{return [...prev, {userId: user._id,
      title: title, 
      description: description}]})
  }

  const tasksDisplay = tasks.map((ele) => {
    return <TaskToDo title={ele.title} description={ele.description} />;
  });

  return (
    <div className="right-main-page-container">
      <div className="right-main-page-title">Happiness To Do</div>
      <div>
        <form className="form2" onSubmit={uploadTodo}>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button type="submit">Post</button>
        </form>
      </div>
      {tasksDisplay}
    </div>
  );
}
