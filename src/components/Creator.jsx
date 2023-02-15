import React, { useState } from "react";

export default function Creator() {
  let [taskInfo, setTaskInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("tasks", taskInfo);
    setTaskInfo("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Do the dishes"
        value={taskInfo}
        autoFocus
        onChange={(e) => setTaskInfo(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
