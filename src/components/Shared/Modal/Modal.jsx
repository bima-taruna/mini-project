import Button from "../Button/Button";

function Modal({ title, icons, children, onClose }) {
  return (
    <section className="modal">
      <div className="modal-head">
        <div className="modal-title">
          {icons ? icons : ""}
          {title}
        </div>
        <Button label="X" onclick={onClose} />
      </div>
      {children}
    </section>
  );
}

export default Modal;
