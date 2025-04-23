import ModalWithForm from './ModalWithForm';
import { authorize, checkToken } from '../utils/authorize';
const LoginModal = ({
  onClose,
  handleSignUpModal,
  email,
  password,
  setEmail,
  setPassword,
  errorMessage,
  setErrorMessage,
  isLoggedIn,
  setIsLoggedIn,
  setIsMenuOpen,
}) => {
  // uses authorize to stimulate login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authorize({ email, password });
      console.log('Login successful:', res);
      setIsLoggedIn(true); // Set the logged-in state to true
      onClose(); // Close the modal
      setIsMenuOpen(false); // Close the menu if it's open
      setErrorMessage(''); // Clear any previous error message
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
