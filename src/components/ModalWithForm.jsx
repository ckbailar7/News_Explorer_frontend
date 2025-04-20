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
    <div className={`modalWithForm modalWithForm--${name}`}>
      {/* Moved button from inside form to outside for mobile dev */}
      
      <div className="modalWithForm__content" ref={modalRef}>
        <button
          className="modalWithForm__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modalWithForm__title">{title}</h3>
        <form className="modalWithForm__form">{children}</form>
      </div>
    </div>
  );
};

export default ModalWithForm;
