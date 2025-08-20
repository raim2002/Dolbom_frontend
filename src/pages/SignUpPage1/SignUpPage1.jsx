// src/pages/SignUpPage1/SignUpPage1.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage1.module.css";
import useSignUpStore from "../../store/useSignUpStore";

const SignUpPage1 = () => {
  const navigate = useNavigate();
  const { setPhoneNumber, setEmail, setPassword } = useSignUpStore();

  const [localPhoneNumber, setLocalPhoneNumber] = useState("");
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  const [isFormValid, setIsFormValid] = useState(false);

  const validatePhoneNumber = (phone) => {
    if (!phone) {
      setPhoneNumberError("전화번호를 입력해주세요.");
      return false;
    }
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneNumberError("010-1234-5678 형식으로 입력해주세요.");
      return false;
    }
    setPhoneNumberError("");
    return true;
  };

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("비밀번호는 6자 이상이어야 합니다.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  useEffect(() => {
    const isPhoneValid = validatePhoneNumber(localPhoneNumber);
    const isEmailValid = validateEmail(localEmail);
    const isPasswordValid = validatePassword(localPassword);
    const isConfirmPasswordValid = localPassword === confirmPassword && confirmPassword !== "";

    if (isPhoneValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [localPhoneNumber, localEmail, localPassword, confirmPassword]);
  
  useEffect(() => {
    if (confirmPassword && localPassword !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  }, [localPassword, confirmPassword]);

  const handleNextStep = () => {
    setPhoneNumber(localPhoneNumber);
    setEmail(localEmail);
    setPassword(localPassword);
    navigate("/signup-info");
  };

  return (
    <div className={styles.element}>
      <div className={styles.div}>
        <div className={styles['header-group']}>
            <div className={styles['text-wrapper-3']}>회원가입</div>
            <div className={styles['text-wrapper-2']}>
              사용하실 이메일과 비밀번호를 입력해주세요.
            </div>
        </div>
        <div className={styles['overlap-group']}>
          <div className={styles.content}>
            <div className={styles['input-button']}>
              <div className={styles.inputGroup}>
                <div className={styles.field}>
                  <input
                    type="tel"
                    className={styles.inputElement}
                    placeholder="전화번호 (010-1234-5678)"
                    value={localPhoneNumber}
                    onChange={(e) => setLocalPhoneNumber(e.target.value)}
                  />
                </div>
                {phoneNumberError && <p className={styles.errorMessage}>{phoneNumberError}</p>}
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.field}>
                  <input
                    type="email"
                    className={styles.inputElement}
                    placeholder="이메일을 입력해주세요"
                    value={localEmail}
                    onChange={(e) => setLocalEmail(e.target.value)}
                  />
                </div>
                {emailError && <p className={styles.errorMessage}>{emailError}</p>}
              </div>

              {/* --- ▼▼▼ 누락되었던 비밀번호 입력창들 ▼▼▼ --- */}
              <div className={styles.inputGroup}>
                <div className={styles['label-wrapper']}>
                  <input
                    type="password"
                    className={styles.inputElement}
                    placeholder="비밀번호 입력"
                    value={localPassword}
                    onChange={(e) => setLocalPassword(e.target.value)}
                  />
                </div>
                {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
              </div>

              <div className={styles.inputGroup}>
                <div className={styles['label-wrapper']}>
                  <input
                    type="password"
                    className={styles.inputElement}
                    placeholder="비밀번호 재입력"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {confirmPasswordError && <p className={styles.errorMessage}>{confirmPasswordError}</p>}
              </div>
              {/* --- ▲▲▲ 여기까지 --- */}
            </div>
          </div>
          <div className={styles.buttons}>
            <button 
              className={styles.button} 
              onClick={handleNextStep} 
              disabled={!isFormValid}
            >
              <div className={styles['text-wrapper']}>다음</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;
