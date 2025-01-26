import { useRef, useEffect } from "react";

import "../blocks/ModalWithForm.css";

const ModalWithForm = ({ name, title, children, onClose }) => {
  const modalRef = useRef(null);

  // Detecting clicks
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content-modalWithForm" ref={modalRef}>
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
