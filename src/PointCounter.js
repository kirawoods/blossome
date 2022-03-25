import "./PointCounter.css";

export function PointCounter(props) {
  return (
    <div className="PointCounter">
      <img src={require("./coin.png")} alt="coin" className="coin-image"></img>
      <div className="point-total">{props.pointTotal}</div>
    </div>
  );
}
