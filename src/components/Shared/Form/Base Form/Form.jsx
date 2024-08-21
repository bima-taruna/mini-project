import Button from "../../Button/Button";
import "./form.css";
function Form({
  children,
  mode = "",
  buttonLabel,
  className,
  onSubmit,
  onCancel,
}) {
  return (
    <form
      className={`${className}${mode ? `-${mode}` : ""}`}
      onSubmit={onSubmit}
    >
      {children}
      <div className="button-group">
        <Button label="Cancel" onclick={onCancel} />
        <Button type="submit" label={buttonLabel} classname="primary" />
      </div>
    </form>
  );
}

export default Form;
