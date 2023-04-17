import "./App.css";
import { ListItem } from "./ListItem";
import { PointCounter } from "./PointCounter";
import { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import data from "./data.json";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [pointTotal, updatePointTotal] = useState(0);

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    console.log(name);
    setToDoList(toDoList.filter((item) => item.task !== name));
    const points = e.target.getAttribute("points");
    updatePointTotal(parseInt(pointTotal) + parseInt(points));
  };

  const addTask = (taskInput, pointInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: taskInput, points: pointInput },
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="HeaderText">
          <div className="Title">Blossome</div>
          <div className="Subtitle">Attain your potential</div>
        </div>
        <PointCounter pointTotal={pointTotal} />
      </div>
      <div className="ItemList">
        <div className="ColumnHeader">Tasks</div>
        <ToDoForm addTask={addTask} />

        {toDoList.map((item) => {
          return (
            <>
              <div key={item.id} className="item-container">
                <span
                  className="checkbox"
                  name={item.task}
                  points={item.points}
                  onClick={handleRemoveItem}
                />
                <ListItem name={item.task} points={item.points} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
