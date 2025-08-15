// src/pages/LoginPage/LoginPage.jsx

import React from "react";
import styles from "./LoginPage.module.css"; // 올바른 CSS 파일 경로

const LoginPage = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.div}>
        <div className={styles.content}>
          <div className={styles['input-button']}>
            <div className={styles.field}>
              <div className={styles.label}>아이디를 입력하세요</div>
            </div>

            <div className={styles['label-wrapper']}>
              <div className={styles.label}>비밀번호를 입력하세요</div>
            </div>

            <button className={styles.button}>
              <div className={styles['text-wrapper']}>로그인</div>
            </button>
          </div>

          <div className={styles.divider}>
            <div className={styles['divider-2']} />
          </div>

          <div className={styles.buttons}>
            <button className={styles['div-wrapper']}>
              <div className={styles['label-2']}>
                <div className={styles['text-wrapper-2']}>회원가입</div>
              </div>
            </button>
          </div>

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

export default LoginPage; // export 추가