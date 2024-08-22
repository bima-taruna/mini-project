import "./text-area.css";

function TextArea({ title, placeholder, onChange, name, id, value }) {
  return (
    <div className="text-area-input">
      <label htmlFor={id}>{title}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={200}
      ></textarea>
    </div>
  );
}

export default TextArea;
