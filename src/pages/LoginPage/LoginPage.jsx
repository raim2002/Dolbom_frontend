// src/pages/LoginPage/LoginPage.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  // 아이디와 비밀번호 입력을 기억하기 위한 State
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.screen}>
      <div className={styles.div}>
        <div className={styles.content}>
          <div className={styles['input-button']}>
            {/* 아이디 입력창 */}
            <div className={styles.field}>
              <input
                type="text"
                className={styles.inputElement}
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            {/* 비밀번호 입력창 */}
            <div className={styles['label-wrapper']}>
              <input
                type="password"
                className={styles.inputElement}
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* 로그인 버튼 */}
            <Link to="/dashboard" className={styles.link}>
              <button className={styles.button}>
                <div className={styles['text-wrapper']}>로그인</div>
              </button>
            </Link>
          </div>
          
          {/* 구분선 */}
          <div className={styles.divider}>
            <div className={styles['divider-2']} />
          </div>

          {/* 회원가입 버튼 */}
          <div className={styles.buttons}>
            <Link to="/signup" className={styles.link}>
              <button className={styles['div-wrapper']}>
                <div className={styles['label-2']}>
                  <div className={styles['text-wrapper-2']}>회원가입</div>
                </div>
              </button>
            </Link>
          </div>

          {/* 약관 안내 문구 */}
          <p className={styles['by-clicking-continue']}>
            <span className={styles.span}>
              By clicking continue, you agree to our{" "}
            </span>
            <span className={styles['text-wrapper-3']}>Terms of Service</span>
            <span className={styles.span}> and </span>
            <span className={styles['text-wrapper-3']}>Privacy Policy</span>
          </p>
        </div>

        <div className={styles['text-wrapper-4']}>돌봄 시스템</div>
      </div>
    </div>
  );
};

export default LoginPage;