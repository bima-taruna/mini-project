import TextInput from "../../Input/Text Input/TextInput";
import TextArea from "../../Input/Text Area/TextArea";
import Form from "../Base Form/Form";
function GroupForm({ onCancel }) {
  return (
    <Form
      buttonLabel={"Submit"}
      className={"group-form"}
      onCancel={onCancel}
      onSubmit={() => {}}
    >
      <TextInput
        title={"Group Name"}
        placeholder={"Type group name"}
        name={"group-title"}
      />
      <TextArea
        title={"Description"}
        placeholder={"Type description"}
        name={"group-desc"}
      />
    </Form>
  );
}

export default GroupForm;
