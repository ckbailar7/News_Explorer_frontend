import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ onClose, handleSignUpModal }) => {
  return (
    <ModalWithForm onClose={onClose} title="Sign in">
      <label className="modalWithForm__label">
        Email
        <input
          className="modalWithForm__input"
          name="email"
          id="email"
          type="email"
          minLength="1"
          maxLength="300"
          placeholder="Enter email"
        />
      </label>
      <label className="modalWithForm__label">
        Password
        <input
          className="modalWithForm__input"
          id="password"
          type="password"
          minLength="1"
          maxLength="300"
          placeholder="Enter password"
        />
      </label>
      <button className="modalWithForm__signInButton">
        <p className="modalWithForm__signInButtonText">Sign in</p>
      </button>
      <p>
        Or{" "}
        <a
          className="modalWithForm__signUpTransfer"
          onClick={handleSignUpModal}
        >
          Signup
        </a>
      </p>
    </ModalWithForm>
  );
};

export default LoginModal;
