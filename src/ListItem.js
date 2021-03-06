import "./ListItem.css";

export function ListItem(props) {
  return (
    <div className="ListItem">
      <div className="TaskName">{props.name}</div>
      <div className="Points">{props.points}</div>
    </div>
  );
}
