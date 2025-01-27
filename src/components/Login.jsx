import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const toggle = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    } else {
      if (!formData.name) {
        alert('Name is required for sign-up');
        return;
      }
      alert(`Signed up with Name: ${formData.name}, Email: ${formData.email}`);
    }

    setFormData({ email: "", password: "", name: "" });
  };

  const closeLoginPage = () => {
    navigate("/");
  }


  return (
    <div className="auth-container full-page">
      <div className="close-button" onClick={closeLoginPage}>
        &times;
      </div>
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="auth-form-group">
              <label className="auth-label" htmlFor="name">Name</label>
              <input
                className='auth-input'
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder='Enter your name'
                onChange={handleChange}
              />
            </div>
          )}
          <div className="auth-form-group">
            <label className="auth-label" htmlFor="email">Email</label>
            <input
              className='auth-input'
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder='Enter your email'
              onChange={handleChange}
            />
          </div>
          <div className="auth-form-group">
            <label className="auth-label" htmlFor="password">Password</label>
            <input
              className='auth-input'
              type="password"
              name="password"
              id="password"
              value={formData.password}
              placeholder='Enter your password'
              onChange={handleChange}
            />
          </div>
          <button type="submit" className='submit-btn1'>{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p className='toggle-text'>
          {isLogin ? "Don't have an account?" : "Already have an account?"} <span onClick={toggle}>{isLogin ? "Sign up" : "Login"}</span>
        </p>
      </div >
    </div >
  );
}

export default Login;