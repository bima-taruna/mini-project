import Button from "../../Button/Button";
import "./form.css";
function Form({
  children,
  mode = "",
  buttonLabel,
  className,
  onSubmit,
  onClick,
}) {
  return (
    <form
      className={`${className}${mode ? `-${mode}` : ""}`}
      onSubmit={onSubmit}
    >
      {children}
      <div className="button-group">
        <Button label="Cancel" onclick={onClick} />
        <Button type="submit" label={buttonLabel} classname="primary" />
      </div>
    </form>
  );
}

export default Form;
