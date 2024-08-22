import TextInput from "../../Input/Text Input/TextInput";
import TextArea from "../../Input/Text Area/TextArea";
import Form from "../Base Form/Form";
import useForm from "../../../../hooks/useForm";
import usePost from "../../../../hooks/usePost";
function GroupForm({ onCancel }) {
  const { values, handleChange, resetForm } = useForm({
    title: "",
    description: "",
  });

  const { data, loading, error, postData } = usePost(
    `${import.meta.env.VITE_API_URL}/todos`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData(values);
    resetForm();
  };

  if (data) {
    return <p>Success</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <Form
      buttonLabel={"Submit"}
      className={"group-form"}
      onCancel={onCancel}
      onSubmit={handleSubmit}
    >
      <TextInput
        title={"Group Name"}
        placeholder={"Type group name"}
        name={"title"}
        id={"group-title"}
        value={values.title}
        onChange={handleChange}
      />
      <TextArea
        title={"Description"}
        placeholder={"Type description"}
        name={"description"}
        id={"group-desc"}
        value={values.description}
        onChange={handleChange}
      />
    </Form>
  );
}

export default GroupForm;
