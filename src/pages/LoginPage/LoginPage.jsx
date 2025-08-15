// src/pages/LoginPage/LoginPage.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import axios from "axios"; // 1. axios(택배기사)를 불러옵니다.
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 2. '로그인' 버튼을 클릭했을 때 실행될 함수
  const handleLogin = async () => {
    // 간단한 유효성 검사
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return; // 함수를 여기서 멈춥니다.
    }

    try {
      // 3. State 변수에 저장된 id와 password를 객체로 포장합니다.
      const loginData = {
        username: id, // 백엔드에서 받을 key 이름 (예: username)
        password: password,
      };

      // 4. axios를 이용해 백엔드 API로 데이터를 전송(POST)합니다.
      // 주소는 실제 백엔드 서버 주소로 변경해야 합니다.
      const response = await axios.post(
        "http://localhost:8080/api/auth/login", 
        loginData
      );

      // 5. 서버로부터 성공적인 응답을 받았을 때의 처리
      console.log("로그인 성공!", response.data);
      // 예시: 서버가 보내준 토큰을 로컬 스토리지에 저장
      // localStorage.setItem('accessToken', response.data.token);
      
      // 6. 대시보드 페이지로 이동
      navigate("/dashboard");

    } catch (error) {
      // 7. 서버로부터 에러 응답을 받았을 때의 처리
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