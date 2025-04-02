import ModalWithForm from "./ModalWithForm";

const SignUpModal = ({ onClose, handleLoginModal }) => {
  return (
    <ModalWithForm onClose={onClose} title="Sign Up">
      <label className="modalWithForm__label">
        Email
        <input
          type="email"
          name="email"
          className="modalWithForm__input"
          minLength="1"
          maxLength="300"
          placeholder="Enter email"
        />
      </label>
      <label className="modalWithForm__label">
        Password
        <input
          type="password"
          name="password"
          className="modalWithForm__input"
          minLength="1"
          maxLength="300"
          placeholder="Enter password"
        />
      </label>
      <label className="modalWithForm__label">
        Username
        <input
          type="username"
          name="username"
          className="modalWithForm__input"
          minLength="1"
          maxLength="300"
          placeholder="Enter username"
        />
      </label>
      <button className="modalWithForm__signInButton">
        <p className="modalWithForm__signInButtonText">Sign up</p>
      </button>
      <p>
        Or{" "}
        <a className="modalWithForm__signUpTransfer" onClick={handleLoginModal}>
          Sign in
        </a>
      </p>
    </ModalWithForm>
  );
};

export default SignUpModal;
