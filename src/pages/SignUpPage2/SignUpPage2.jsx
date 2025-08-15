// src/pages/SignUpPage2/SignUpPage2.jsx

import React from "react";
import styles from "./SignUpPage2.module.css"; // CSS 파일 경로 수정

// 컴포넌트 이름을 Element에서 SignUpPage2로 변경
const SignUpPage2 = () => {
  return (
    <div className={styles.element}>
      <div className={styles.div}>
        <div className={styles.buttons}>
          <div className={styles['overlap-group']}>
            <div className={styles.field}>
              <div className={styles.label}>도로명 주소</div>
            </div>
            <div className={styles['label-wrapper']}>
              <div className={styles.label}>상세 주소</div>
            </div>
            <div className={styles.content}>
              <div className={styles['input-button']}>
                <div className={styles['div-wrapper']}>
                  <div className={styles.label}>피보호자 이름</div>
                </div>
                <div className={styles['field-2']}>
                  <div className={styles.label}>나이</div>
                </div>
                <div className={styles['field-2']}>
                  <div className={styles.label}>키</div>
                </div>
                <div className={styles['field-2']}>
                  <div className={styles.label}>몸무게</div>
                </div>
                <div className={styles['field-2']}>
                  <div className={styles.label}>기저 질환</div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles['label-2']}>
              <div className={styles['text-wrapper']}>가입하기</div>
            </div>
          </button>
        </div>
        <div className={styles['text-wrapper-2']}>사용자 정보를 입력해주세요</div>
        <div className={styles['text-wrapper-3']}>회원가입</div>
      </div>
    </div>
  );
};

export default SignUpPage2; // export 추가