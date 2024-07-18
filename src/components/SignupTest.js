import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const SignupTest = ({ setLoginStatus }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState(""); // 이름 필드에 대한 오류 메시지 상태 추가

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      isEmailValid &&
      isNameValid &&
      isPasswordValid &&
      isPasswordConfirmValid
    ) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          email,
        });

        setLoginStatus(true); // 회원가입 성공 후 로그인 상태 설정
        console.log("회원가입 성공:", user);
      } catch (error) {
        console.error("회원가입 실패:", error);
        alert("회원가입 실패: " + error.message);
      }
    } else {
      alert("입력한 정보를 다시 확인해주세요");
    }
  };

  const validateEmail = (email) => {
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    return emailRegExp.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    return passwordRegExp.test(password);
  };

  const validateName = (name) => {
    return name.length >= 2 && name.length <= 5;
  };

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    if (!validateEmail(currentEmail)) {
      setEmailMessage("올바르지 않은 형식입니다");
      setIsEmailValid(false);
    } else {
      setEmailMessage("");
      setIsEmailValid(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    if (!validatePassword(currentPassword)) {
      setPasswordMessage("숫자+영문자+특수문자 조합 8자리 이상 입력해주세요");
      setIsPasswordValid(false);
    } else {
      setPasswordMessage("");
      setIsPasswordValid(true);
    }
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    if (!validateName(currentName)) {
      setNameMessage("2글자 이상 5글자 이내로 입력해주세요");
      setIsNameValid(false);
    } else {
      setNameMessage("");
      setIsNameValid(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
      setIsPasswordConfirmValid(false);
    } else {
      setPasswordConfirmMessage("");
      setIsPasswordConfirmValid(true);
    }
  };

  return (
    <div className="login-page">
      <div className="login-float-container">
        <h1>Sleek</h1>
        <form className="login-form" onSubmit={handleSignup}>
          <label>
            <span>E-mail</span>
            <input
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
          </label>
          <p className="message">{emailMessage}</p>
          <label>
            <span>Username</span>
            <input
              placeholder="Username"
              type="text"
              value={name}
              onChange={onChangeName}
            />
          </label>
          <p className="message">{nameMessage}</p>
          <label>
            <span>Password</span>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </label>
          <p className="message">{passwordMessage}</p>
          <label>
            <span>Confirm pssword</span>
            <input
              placeholder="Confirm password"
              type="password"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
          </label>
          <p className="message">{passwordConfirmMessage}</p>
          <button type="submit">Sign Up</button>
        </form>
        <div className="additional-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span> | </span>
          <Link to="/LoginPage">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupTest;
