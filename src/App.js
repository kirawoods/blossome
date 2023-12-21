import "./App.css";
import { ListItem } from "./ListItem";
import { PointCounter } from "./PointCounter";
import { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { RewardsForm } from "./RewardsForm";
import tasks from "./tasks.json";
import rewards from "./rewards.json";

function App() {
  const [toDoList, setToDoList] = useState(tasks);
  const [rewardsList, setRewardsList] = useState(rewards);
  const [pointTotal, updatePointTotal] = useState(0);

  const handleRemoveTask = (e) => {
    const name = e.target.getAttribute("name");
    console.log(name);
    setToDoList(toDoList.filter((item) => item.task !== name));
    const points = e.target.getAttribute("points");
    updatePointTotal(parseInt(pointTotal) + parseInt(points));
  };

  const handleRemoveReward = (e) => {
    const name = e.target.getAttribute("name");
    console.log(name);
    setRewardsList(rewardsList.filter((item) => item.reward !== name));
    const points = e.target.getAttribute("points");
    updatePointTotal(parseInt(pointTotal) - parseInt(points));
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
      <div className="ColumnContainer">
        <div className="ItemList">
          <div className="ColumnHeader">Tasks</div>
          <ToDoForm addTask={addTask} />

          {toDoList.map((item, i) => {
            return (
              <>
                <div key={item.id} className="item-container">
                  <span
                    className="checkbox"
                    name={item.task}
                    points={item.points}
                    onClick={handleRemoveTask}
                  />
                  <ListItem key={i} name={item.task} points={item.points} />
                </div>
              </>
            );
          })}
        </div>
        <div className="ItemList">
          <div className="ColumnHeader">Rewards</div>
          <RewardsForm addTask={addTask} />
          {rewardsList.map((item, i) => {
            return (
              <>
                <div key={item.id} className="item-container">
                  <span
                    className="checkbox"
                    name={item.reward}
                    points={item.points}
                    onClick={handleRemoveReward}
                  />
                  <ListItem key={i} name={item.reward} points={item.points} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
