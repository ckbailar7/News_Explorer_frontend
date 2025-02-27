import ModalWithForm from "./ModalWithForm";

const SignUpModal = ({ onClose, handleLoginModal }) => {
  return (
    <ModalWithForm onClose={onClose} title="Sign Up">
      <div className="modalWithForm">
        <label className="modalWithForm__name">
          Email
          <input
            type="email"
            name="email"
            className="modalWithForm__name-input"
            minLength="1"
            maxLength="300"
            placeholder="Enter email"
          />
        </label>
        <label className="modalWithForm__name">
          Password
          <input
            type="password"
            name="password"
            className="modalWithForm__name-input"
            minLength="1"
            maxLength="300"
            placeholder="Enter password"
          />
        </label>
        <label className="modalWithForm__name">
          Username
          <input
            type="username"
            name="username"
            className="modalWithForm__name-input"
            minLength="1"
            maxLength="300"
            placeholder="Enter username"
          />
        </label>
        <button className="modalWithForm__name-signInButton">
          <p className="modalWithForm__name-signInButton_text">Sign up</p>
        </button>
        <p>
          Or{" "}
          <a
            className="modalWithForm__name-signUpTransfer"
            onClick={handleLoginModal}
          >
            Sign in
          </a>
        </p>
      </div>
    </ModalWithForm>
  );
};

export default SignUpModal;
