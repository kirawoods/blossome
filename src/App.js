import "./App.css";
import { ListItem } from "./ListItem";
import { PointCounter } from "./PointCounter";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="HeaderText">
          <div className="Title">Blossome</div>
          <div className="Subtitle">Attain your potential</div>
        </div>
        <PointCounter pointTotal="200" />
      </div>
      <div className="ItemList">
        <ListItem name="Feed Cats" points="5" />
        <ListItem name="Play with Cats" points="10" />
        <ListItem name="Cuddle Cats" points="3" />
      </div>
    </div>
  );
}

export default App;
