import "./PointCounter.css";

export function PointCounter(props) {
  return (
    <div className="PointCounter">
      <div>{props.pointTotal}</div>
    </div>
  );
}
