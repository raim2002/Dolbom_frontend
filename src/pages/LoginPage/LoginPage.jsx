// src/pages/LoginPage/LoginPage.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import axios from "axios"; // 1. axios(택배기사)를 불러옵니다.
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // '로그인' 버튼을 클릭했을 때 실행될 함수
  const handleLogin = async () => {
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const loginData = {
        email: id, // 백엔드 DTO에 맞춰 email로 전송
        password: password,
      };

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginData
      );

      // --- ▼▼▼▼▼▼▼▼▼ 이 부분이 추가/수정됩니다 ▼▼▼▼▼▼▼▼▼ ---

      // 1. 백엔드가 응답 헤더(header)에 담아준 '인증 티켓'을 꺼냅니다.
      const token = response.headers['authorization'];
      
      if (token) {
        console.log("로그인 성공! 발급된 토큰:", token);
        
        // 2. '인증 티켓'을 브라우저의 localStorage라는 안전한 저장소에 보관합니다.
        localStorage.setItem('accessToken', token);

        // 3. 대시보드 페이지로 이동합니다.
        navigate("/dashboard");
      } else {
        // 혹시 모를 예외 상황: 응답은 성공했지만 토큰이 없는 경우
        alert("로그인에 성공했지만 토큰을 받지 못했습니다.");
      }
      
      // --- ▲▲▲▲▲▲▲▲▲ 여기까지 추가/수정 ▲▲▲▲▲▲▲▲▲ ---

    } catch (error) {
      console.error("로그인 중 에러 발생:", error);
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className={styles.screen}>
      <div className={styles.div}>
        <div className={styles.content}>
          <div className={styles['input-button']}>
            <div className={styles.field}>
              <input
                type="text"
                className={styles.inputElement}
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className={styles['label-wrapper']}>
              <input
                type="password"
                className={styles.inputElement}
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* 8. 로그인 버튼에 onClick 이벤트를 연결합니다. */}
            <button className={styles.button} onClick={handleLogin}>
              <div className={styles['text-wrapper']}>로그인</div>
            </button>
          </div>

          {/* ... 나머지 코드는 그대로 ... */}
          <div className={styles.divider}>
            <div className={styles['divider-2']} />
          </div>
          <div className={styles.buttons}>
            <Link to="/signup" className={styles.link}>
              <button className={styles['div-wrapper']}>
                <div className={styles['label-2']}>
                  <div className={styles['text-wrapper-2']}>회원가입</div>
                </div>
              </button>
            </Link>
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

export default LoginPage;