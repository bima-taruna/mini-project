import Button from "../Button/Button";
import "./modal.css";
function Modal({ title, icons = "", children, onClose }) {
  return (
    <div className="modal-overlay">
      <section className="modal">
        <div className="modal-head">
          <div className="modal-title">
            {icons}
            {title}
          </div>
          <Button classname="modal-close" label="X" onclick={onClose} />
        </div>
        {children}
      </section>
    </div>
  );
}

export default Modal;
