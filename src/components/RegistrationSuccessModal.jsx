import { useRef, useEffect } from 'react';
import ModalWithForm from './ModalWithForm';
import './blocks/ModalWithForm.css';

const RegistrationSuccessModal = ({
  onClose,
  handleLoginModal,
  activeModal,
  name,
}) => {
  const modalRef = useRef(null);

  // Detecting clicks
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className={`modal-with-form modal-with-form--${name}`}>
      <div
        className="modal-with-form__content modal-with-form__content--success"
        ref={modalRef}
      >
        <button
          className="modal-with-form__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <div className="modal-with-form__title-container modal-with-form__title-container--success">
          <h1 className="modal-with-form__title modal-with-form__title--success">
            Registration successfully completed!
          </h1>
        </div>
        <p className="modal-with-form__signUpTransfer-container modal-with-form__signUpTransfer-container--success">
          <a
            className="modal-with-form__signUpTransfer"
            onClick={handleLoginModal}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationSuccessModal;
