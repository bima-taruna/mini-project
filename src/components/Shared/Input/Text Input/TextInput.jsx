import "./text-input.css";

function TextInput({ title, placeholder, onChange, name, id, value }) {
  return (
    <div className="text-input">
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        value={value}
        min={4}
        max={100}
        required
      />
    </div>
  );
}

export default TextInput;
