import "./progress-input.css";

function ProgressInput({ title, placeholder, onChange, name, id, value }) {
  return (
    <div className="progress-input">
      <label htmlFor={name}>{title}</label>
      <input
        type="number"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        value={value}
        min={0}
        step={5}
        max={100}
      />
    </div>
  );
}

export default ProgressInput;
