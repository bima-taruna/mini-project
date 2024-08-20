import PropTypes from "prop-types";
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

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  classname: PropTypes.string,
  disabled: PropTypes.bool,
  onclick: PropTypes.func,
};

export default Button;
