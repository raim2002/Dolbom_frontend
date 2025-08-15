// src/pages/SignUpPage1/SignUpPage1.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link for the 'Next' button
import styles from "./SignUpPage1.module.css";

const SignUpPage1 = () => {
  // 1. State for each input field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
              {/* 2. Replace divs with functional input tags */}
              <div className={styles.field}>
                <input
                  type="email"
                  className={styles.inputElement}
                  placeholder="이메일을 입력해주세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles['label-wrapper']}>
                <input
                  type="password"
                  className={styles.inputElement}
                  placeholder="비밀번호 입력"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles['label-wrapper']}>
                <input
                  type="password"
                  className={styles.inputElement}
                  placeholder="비밀번호 재입력"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            {/* 3. Make the 'Next' button navigate */}
            <Link to="/signup-info" className={styles.link}>
              <button className={styles.button}>
                <div className={styles['text-wrapper']}>다음</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;