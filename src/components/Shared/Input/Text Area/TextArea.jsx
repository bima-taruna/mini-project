import "./text-area.css";

function TextArea({ title, placeholder, onChange, name, value }) {
  return (
    <div className="text-area-input">
      <label htmlFor={name}>{title}</label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={200}
      ></textarea>
    </div>
  );
}

export default TextArea;
