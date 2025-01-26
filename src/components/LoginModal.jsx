import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ onClose }) => {
  return (
    <ModalWithForm onClose={onClose} title="Sign in">
      <div className="modalWithForm">
        <label className="modalWithForm__name">
          Email
          <input
            className="modalWithForm__name-input"
            name="email"
            id="email"
            type="email"
            minLength="1"
            maxLength="300"
            placeholder="Enter email"
          />
        </label>
        <label className="modalWithForm__name">
          Password
          <input
            className="modalWithForm__name-input"
            id="password"
            type="password"
            minLength="1"
            maxLength="300"
            placeholder="Enter password"
          />
        </label>
        <button className="modalWithForm__name-signInButton">
          <p className="modalWithForm__name-signInButton_text">Sign in</p>
        </button>
        <p>
          Or{" "}
          <a className="modalWithForm__name-signUpTransfer" href="/signup">
            Signup
          </a>
        </p>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
