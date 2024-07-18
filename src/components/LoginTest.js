import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"; // React Router 사용

function LoginTest({ setLoginStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isEmail && isPassword) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setLoginStatus(true);
        console.log("로그인 성공:", userCredential.user);
      } catch (error) {
        console.error("로그인 실패:", error);
        alert("로그인 실패: " + error.message);
      }
    } else {
      alert("입력한 정보를 다시 확인해주세요.");
    }
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    if (currentPassword.length < 6) {
      setPasswordMessage("비밀번호는 최소 6자 이상이어야 합니다.");
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  };

  return (
    <div className="login-page">
      <div className="login-float-container">
        <h1>Sleek</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label>
            <span>email</span>
            <input
              placeholder="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
          </label>
          <p className="message">{emailMessage}</p>
          <label>
            <span>password</span>
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </label>
          <p className="message">{passwordMessage}</p>
          <button type="submit">Login</button>
        </form>
        <div className="additional-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span> | </span>
          <Link to="/SignupTest">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginTest;
