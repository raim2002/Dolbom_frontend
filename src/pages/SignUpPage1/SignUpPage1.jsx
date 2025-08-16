// src/pages/SignUpPage1/SignUpPage1.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage1.module.css";
import useSignUpStore from "../../store/useSignUpStore"; // 1. 중앙 보관소를 불러옵니다.

const SignUpPage1 = () => {
  const navigate = useNavigate();
  // 2. 중앙 보관소에서 데이터 수정 함수를 가져옵니다.
  const { setEmail, setPassword } = useSignUpStore();

  // 비밀번호 확인을 위한 로컬 State는 그대로 사용합니다.
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNextStep = () => {
    if (localPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!localEmail || !localPassword) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    
    // 3. 유효성 검사를 통과하면, 중앙 보관소에 데이터를 저장합니다.
    setEmail(localEmail);
    setPassword(localPassword);

    console.log("중앙 보관소에 이메일, 비밀번호 저장 완료!");
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
              <div className={styles.field}>
                <input
                  type="email"
                  className={styles.inputElement}
                  placeholder="이메일을 입력해주세요"
                  value={localEmail}
                  onChange={(e) => setLocalEmail(e.target.value)}
                />
              </div>
              <div className={styles['label-wrapper']}>
                <input
                  type="password"
                  className={styles.inputElement}
                  placeholder="비밀번호 입력"
                  value={localPassword}
                  onChange={(e) => setLocalPassword(e.target.value)}
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
            <button className={styles.button} onClick={handleNextStep}>
              <div className={styles['text-wrapper']}>다음</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;