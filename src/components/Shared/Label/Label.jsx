import "./label.css";

function Label({ name, className }) {
  return <div className={`group-label ${className}`}>{name}</div>;
}

export default Label;
