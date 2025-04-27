import ModalWithForm from './ModalWithForm';
import '../blocks/ModalWithForm.css';

const RegistrationSuccessModal = ({
  onClose,
  handleLoginModal,
  activeModal,
  name,
}) => {
  return (
    <div className={`modal-with-form modal-with-form--${name}`}>
      <div className="modal-with-form__content--success">
        <button
          className="modal-with-form__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <div className="modal-with-form__title--success-container">
          <h1 className="modal-with-form__title--success">
            Registration successfully completed!
          </h1>
        </div>
        <p className="modal-with-form__signUpTransfer-container--success">
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
