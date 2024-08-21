import "./text-input.css";

function TextInput({ title, placeholder, onChange, name, value }) {
  return (
    <div className="text-input">
      <label htmlFor={name}>{title}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        id={name}
        value={value}
        min={4}
        max={100}
      />
    </div>
  );
}

export default TextInput;
