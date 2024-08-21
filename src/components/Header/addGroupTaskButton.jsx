import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";
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
          asdasd
        </Modal>
      )}
    </>
  );
}

export default AddGroupTaskButton;
