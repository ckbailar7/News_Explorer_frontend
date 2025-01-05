import ModalWithForm from "./ModalWithForm";

const LoginModal = ({}) => {
  return (
    <ModalWithForm title="Login">
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
            placeholder="Email"
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
            placeholder="Password"
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
