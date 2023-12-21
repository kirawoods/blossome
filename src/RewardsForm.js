import "./ItemInput.css";
import { useState } from "react";

export function RewardsForm({ addTask }) {
  const [taskInput, setTaskInput] = useState("");
  const [pointInput, setPointInput] = useState(null);

  const handleTaskChange = (e) => {
    console.log(e.currentTarget.value);
    setTaskInput(e.currentTarget.value);
  };

  const handlePointChange = (e) => {
    console.log(e.currentTarget.value);
    setPointInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskInput, pointInput);
    setTaskInput("");
    setPointInput(0);
  };

  return (
    <form onSubmit={handleSubmit} className="ItemInput">
      <input
        className="TaskInput"
        value={taskInput}
        type="text"
        onChange={handleTaskChange}
        placeholder="Enter reward..."
      />
      <input
        className="PointInput"
        value={pointInput}
        type="text"
        onChange={handlePointChange}
        placeholder="Points..."
      />
      <button className="SubmitButton"></button>
    </form>
  );
}
