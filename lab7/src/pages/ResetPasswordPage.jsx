import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../userData/userData';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!regex.test(value));
  };

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const all = lowercase + uppercase + numbers + symbols;

    let password = [
      lowercase[Math.floor(Math.random() * lowercase.length)],
      uppercase[Math.floor(Math.random() * uppercase.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];

    for (let i = password.length; i < 12; i++) {
      password.push(all[Math.floor(Math.random() * all.length)]);
    }

    return password.sort(() => Math.random() - 0.5).join('');
  };

  const handleSubmit = () => {
    if (!email || emailError) return;

    const users = getUsers();
    const user = users.find((u) => u.email === email);

    if (user) {
      const newPassword = generatePassword();
      alert(`Новый пароль: ${newPassword}`);
    } else {
      alert('Пользователь не найден');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-title">Восстановление пароля</h1>

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
        <button
          onClick={handleSubmit}
          className={`auth-button ${email && !emailError ? 'active' : ''}`}
          disabled={!email || emailError}
        >
          Восстановить
        </button>

        {}
        <div className="auth-links">
          <Link to="/sign-in" className="auth-link">
            Вход
          </Link>
        </div>
      </div>
    </div>
  );
}