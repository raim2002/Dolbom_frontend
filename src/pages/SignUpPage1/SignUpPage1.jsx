// src/pages/SignUpPage1/SignUpPage1.jsx

import React from "react";
import styles from "./SignUpPage1.module.css"; // CSS 파일 경로 수정

// 컴포넌트 이름을 Element에서 SignUpPage1으로 변경
const SignUpPage1 = () => {
  return (
    <div className={styles.element}>
      <div className={styles.div}>
        <div className={styles['overlap-group']}>
          <div className={styles.content}>
            <div className={styles['input-button']}>
              <div className={styles.field}>
                <div className={styles.label}>이메일을 입력해주세요</div>
              </div>
              <div className={styles['label-wrapper']}>
                <div className={styles.label}>비밀번호 입력</div>
              </div>
              <div className={styles['label-wrapper']}>
                <div className={styles.label}>비밀번호 재입력</div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button}>
                <div className={styles['text-wrapper']}>다음</div>
            </button>
            </div>
        </div>
        <div className={styles['header-group']}>
    <div className={styles['text-wrapper-3']}>회원가입</div>
    <div className={styles['text-wrapper-2']}>
      사용하실 이메일과 비밀번호를 입력해주세요.
    </div>
</div>
      </div>
    </div>
  );
};

export default SignUpPage1; // export 추가