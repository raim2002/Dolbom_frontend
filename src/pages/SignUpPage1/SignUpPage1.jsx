// src/pages/SignUpPage1/SignUpPage1.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 사용합니다.
import axios from "axios"; // axios를 불러옵니다.
import styles from "./SignUpPage1.module.css";

const SignUpPage1 = () => {
  const navigate = useNavigate();

  // 1. 3개의 State 변수를 만듭니다.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // '다음' 버튼을 눌렀을 때 실행될 함수
  const handleNextStep = () => { // async 키워드는 이제 필요 없으므로 제거합니다.
    // 비밀번호와 비밀번호 재입력이 같은지 확인하는 로직은 그대로 둡니다.
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return;
    }

    if (!email || !password || !confirmPassword) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    /*
      ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
      이 아랫부분이 백엔드와 통신하는 코드입니다.
      지금은 UI 흐름 테스트를 위해 잠시 주석 처리(/** ... * /) 하겠습니다.
      나중에 회원가입(2) 페이지까지 완성되면 다시 주석을 풀고 연결할 겁니다.
      ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    */
    /*
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register-email",
        {
          email: email,
          password: password,
        }
      );
      console.log("이메일/비밀번호 등록 성공:", response.data);
    } catch (error) {
      console.error("회원가입 중 에러 발생:", error);
      alert("회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
      return; // 에러가 발생하면 다음 페이지로 넘어가지 않도록 return 추가
    }
    */

    // 유효성 검사를 통과하면 바로 다음 페이지로 이동시킵니다.
    console.log("유효성 검사 통과! 다음 페이지로 이동합니다.");
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
              {/* 각 입력란을 input 태그로 바꾸고 State와 연결합니다. */}
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
            {/* Link 대신 onClick 이벤트를 사용하는 button으로 변경합니다. */}
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