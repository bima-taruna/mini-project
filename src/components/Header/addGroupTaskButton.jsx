import Button from "../Shared/Button/Button";
import GroupForm from "../Shared/Form/Group Form/GroupForm";
import Modal from "../Shared/Modal/Modal";
import { useState } from "react";
function AddGroupTaskButton({ setGroupData }) {
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
        <Modal
          title={"Add New Group"}
          isOpen={isModalOpen}
          onClose={toogleModal}
        >
          <GroupForm onCancel={toogleModal} setGroupData={setGroupData} />
        </Modal>
      )}
    </>
  );
}

export default AddGroupTaskButton;
