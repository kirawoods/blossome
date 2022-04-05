import "./App.css";
import { ListItem } from "./ListItem";
import { PointCounter } from "./PointCounter";
import { useState } from "react";

function App() {
  const defaultList = [
    { name: "ItemOne", points: 5 },
    { name: "ItemTwo", points: 10 },
    { name: "ItemThree", points: 15 },
  ];

  const [list, updateList] = useState(defaultList);
  const [pointTotal, updatePointTotal] = useState(0);

  const handleRemoveItem = (e) => {
    const points = e.target.getAttribute("points");
    updatePointTotal(parseInt(pointTotal) + parseInt(points));
    const name = e.target.getAttribute("name");
    updateList(list.filter((item) => item.name !== name));
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
        {list.map((item) => {
          return (
            <>
              <div className="item-container">
                <span
                  className="checkbox"
                  name={item.name}
                  points={item.points}
                  onClick={handleRemoveItem}
                />
                <ListItem name={item.name} points={item.points} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
