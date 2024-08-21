import { useState } from "react";
import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";
import "./header.css";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toogleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <header>
      <div className="heading">
        <div className="app-title">Product Roadmap</div>
        <Button
          label="+ Add New Group"
          classname="primary"
          onclick={toogleModal}
        />
      </div>
      {isModalOpen && (
        <Modal title={"Add New Group"} onClose={toogleModal}>
          asdasd
        </Modal>
      )}
    </header>
  );
}

export default Header;
