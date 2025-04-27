import ModalWithForm from './ModalWithForm';

const SignUpModal = ({
  onClose,
  handleLoginModal,
  handleRegistrationSuccessModal,
}) => {
  return (
    <ModalWithForm onClose={onClose} title="Sign Up">
      <label className="modal-with-form__label">
        Email
        <input
          type="email"
          name="email"
          className="modal-with-form__input"
          minLength="1"
          maxLength="300"
          placeholder="Enter email"
        />
      </label>
      <label className="modal-with-form__label">
        Password
        <input
          type="password"
          name="password"
          className="modal-with-form__input"
          minLength="1"
          maxLength="300"
          placeholder="Enter password"
        />
      </label>
      <label className="modal-with-form__label">
        Username
        <input
          type="username"
          name="username"
          className="modal-with-form__input"
          minLength="1"
          maxLength="300"
          placeholder="Enter username"
        />
      </label>
      <button className="modal-with-form__signInButton">
        <p
          className="modal-with-form__signInButtonText"
          onClick={handleRegistrationSuccessModal}
        >
          Sign up
        </p>
      </button>
      <p className="modal-with-form__signUpTransfer-container">
        Or{' '}
        <a
          className="modal-with-form__signUpTransfer"
          onClick={handleLoginModal}
        >
          Sign in
        </a>
      </p>
    </ModalWithForm>
  );
};

export default SignUpModal;
