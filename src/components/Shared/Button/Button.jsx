import "./button.css";

function Button({
  label = "",
  type = "button",
  classname = "",
  disabled = false,
  onclick,
}) {
  return (
    <button
      type={type}
      className={`btn ${classname}`}
      disabled={disabled}
      onClick={onclick}
    >
      {label}
    </button>
  );
}

export default Button;
