import "./App.css";
import { ListItem } from "./ListItem";
import { PointCounter } from "./PointCounter";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Title">Blossome</div>
        <div className="Subtitle">Attain your potential</div>
        <PointCounter pointTotal="200" />
      </div>
      <div className="ItemList">
        <ListItem name="Feed Cats" points="50" />
      </div>
    </div>
  );
}

export default App;
