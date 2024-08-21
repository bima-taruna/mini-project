import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";
import TextInput from "../Shared/Form/Text Input/TextInput";
import TextArea from "../Shared/Form/Text Area/TextArea";
import { useState } from "react";
function AddGroupTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toogleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <Button
        label="+ Add New Group"
        classname="primary"
        onclick={toogleModal}
      />
      {isModalOpen && (
        <Modal title={"Add New Group"} onClose={toogleModal}>
          <TextInput
            title={"Group Name"}
            placeholder={"Type your group name"}
            name={"group-name"}
          />
          <TextArea
            title={"Description"}
            placeholder={"Type group description"}
            name={"group-description"}
          />
        </Modal>
      )}
    </>
  );
}

export default AddGroupTaskButton;
