import { useEffect, useState } from "react";
import Creator from "./components/Creator";
import Card from "./components/Card";

function App() {
  let [tasks, setTask] = useState([]);

  const addTask = (taskInfo) => {
    console.log(taskInfo);
    alert(taskInfo);
    setTask([...tasks, taskInfo]);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (JSON.parse(data)) setTask(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleStatus = (title) => {
    setTask(
      tasks.map((el) =>
        el.title === title ? { ...el, status: !el.status } : el
      )
    );
  };

  return (
    <div className="App">
      <h1>Notitapp</h1>
      <Creator addTask={addTask} />

      {tasks &&
        tasks.map((el, index) => {
          return (
            <Card
              key={index}
              handleStatus={handleStatus}
              title={el.title}
              description={el.description}
              status={el.status}
            />
          );

          {
            /* <div key={index}>{el.title}</div> */
          }
        })}
    </div>
  );
}

export default App;
