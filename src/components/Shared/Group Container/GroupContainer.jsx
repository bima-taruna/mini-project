import Label from "../Label/Label";
import { GoPlusCircle } from "react-icons/go";

function GroupContainer({ title, description, classname, children }) {
  return (
    <div className={`group-container ${classname}`}>
      <Label name={title} />
      <div className="group-container-desc">{description}</div>
      {children}
      <button className="add-task-btn">
        <GoPlusCircle /> New Task
      </button>
    </div>
  );
}

export default GroupContainer;
