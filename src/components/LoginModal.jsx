import ModalWithForm from './ModalWithForm';
import { MainApi } from '../utils/MainApi';

const LoginModal = ({
  onClose,
  handleSignUpModal,
  email,
  password,
  setEmail,
  setPassword,
  errorMessage,
  setErrorMessage,
}) => {
  // uses MainApi.jsx.login to stimulate login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await MainApi.login({ email, password });
      console.log('Login successful:', res);
      setErrorMessage(''); // Clear any previous error message
      onClose();
    } catch (error) {
      console.error('Login failed', error);
      setErrorMessage('Incorrect email or password', error.message);
    }
  };
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
      <button onClick={handleSubmit} className="modalWithForm__signInButton">
        <p className="modalWithForm__signInButtonText">Sign in</p>
      </button>
      <p className="modalWithForm__signUpTransfer-container">
        Or
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
