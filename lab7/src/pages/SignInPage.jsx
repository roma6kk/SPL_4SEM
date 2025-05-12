import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../userData/userData';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!regex.test(value));
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;
    setPasswordError(!regex.test(value));
  };

  const handleSubmit = () => {
    if (!email || !password || emailError || passwordError) return;

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert('Вход выполнен');
    } else {
      alert('Неверный email или пароль');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-title">Вход</h1>

        {}
        <div className="form-group">
          <label className="auth-label">E-MAIL</label>
          <input
            type="text"
            value={email}
            onInput={handleEmail}
            className="auth-input"
          />
          {emailError && <p className="error-text">Неверный email</p>}
        </div>

        {}
        <div className="form-group">
          <label className="auth-label">ПАРОЛЬ</label>
          <input
            type="password"
            value={password}
            onInput={handlePassword}
            className="auth-input"
          />
          {passwordError && <p className="error-text">Неверный пароль</p>}
        </div>

        {}
        <button
          onClick={handleSubmit}
          className={`auth-button ${email && password && !emailError && !passwordError ? 'active' : ''}`}
          disabled={!email || !password || emailError || passwordError}
        >
          Войти
        </button>

        {}
        <div className="auth-links">
          <Link to="/sign-up" className="auth-link">Регистрация</Link>
          <span className="divider">|</span>
          <Link to="/reset-password" className="auth-link">Забыли пароль?</Link>
        </div>
      </div>
    </div>
  );
}