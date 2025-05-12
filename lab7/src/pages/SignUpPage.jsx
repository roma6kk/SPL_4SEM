import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, addUser } from '../userData/userData.js';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(value.trim().length < 2);
  };

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

  const handleConfirm = (e) => {
    const value = e.target.value;
    setConfirm(value);
    setConfirmError(value !== password);
  };

  const handleSubmit = () => {
    const users = getUsers(); 
  
    if (name && email && password && confirm && !nameError && !emailError && !passwordError && !confirmError) {
      if (users.some(u => u.email === email)) {
        alert('Пользователь с таким email уже существует');
        return;
      }
      if (users.some(u => u.name === name)) {
        alert('Пользователь с таким именем уже существует');
        return;
      }
  
      addUser({ name, email, password }); 
      alert('Регистрация успешна!');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-title">Регистрация</h1>

        <div className="form-group">
          <label className="auth-label">Имя</label>
          <input
            type="text"
            value={name}
            onInput={handleName}
            className="auth-input"
          />
          {nameError && <p className="error-text">Введите корректное имя</p>}
        </div>

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

        <div className="form-group">
          <label className="auth-label">Пароль</label>
          <input
            type="password"
            value={password}
            onInput={handlePassword}
            className="auth-input"
          />
          {passwordError && <p className="error-text">Пароль должен содержать минимум 8 символов, одну заглавную и одну строчную букву, а также цифру</p>}
        </div>

        <div className="form-group">
          <label className="auth-label">Подтверждение пароля</label>
          <input
            type="password"
            value={confirm}
            onInput={handleConfirm}
            className="auth-input"
          />
          {confirmError && <p className="error-text">Пароли не совпадают</p>}
        </div>

        <button
          onClick={handleSubmit}
          className={`auth-button ${name && email && password && confirm && !nameError && !emailError && !passwordError && !confirmError ? 'active' : ''}`}
          disabled={!name || !email || !password || !confirm || nameError || emailError || passwordError || confirmError}
        >
          Зарегистрироваться
        </button>

        <div className="auth-links">
          <Link to="/sign-in" className="auth-link">Уже есть аккаунт?</Link>
        </div>
      </div>
    </div>
  );
}