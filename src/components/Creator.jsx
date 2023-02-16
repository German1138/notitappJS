import React, { useState } from "react";

export default function Creator({ addTask }) {
  let [taskInfo, setTaskInfo] = useState({
    title: "",
    description: "",
    status: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInfo.title || taskInfo.description) {
      addTask(taskInfo);
      e.target.reset();
    }
  };

  const handleChange = () => {};

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="title"
        placeholder="Do the dishes"
        autoFocus
        onChange={(e) =>
          setTaskInfo({ ...taskInfo, [e.target.name]: e.target.value })
        }
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={(e) =>
          setTaskInfo({ ...taskInfo, [e.target.name]: e.target.value })
        }
      />
      <button>ADD</button>
    </form>
  );
}
