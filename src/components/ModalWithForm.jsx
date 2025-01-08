import "../blocks/ModalWithForm.css";

const ModalWithForm = ({ name, title, children, onClose }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content-modalWithForm">
        <button
          className="modal__content-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__content-title">{title}</h3>
        <form className="modal__content-form">{children}</form>
      </div>
    </div>
  );
};

export default ModalWithForm;
