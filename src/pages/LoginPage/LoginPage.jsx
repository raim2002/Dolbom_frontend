// src/pages/LoginPage/LoginPage.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); // ⭐️ 1. id -> email로 변경
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // ⭐️ 2. 로딩 상태 추가

    const handleLogin = async (e) => { // ⭐️ 3. 이벤트 객체(e) 추가
        e.preventDefault(); // ⭐️ 4. form 태그 사용 시 새로고침 방지

        if (!email || !password) {
            alert("이메일과 비밀번호를 모두 입력해주세요.");
            return;
        }

        setIsLoading(true); // 로딩 시작

        try {
            const loginData = {
                email: email,
                password: password,
            };

            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                loginData
            );

            const token = response.headers['authorization'];

            if (token) {
                console.log("로그인 성공! 발급된 토큰:", token);
                localStorage.setItem('accessToken', token);

                // ⭐️ 5. 페이지 이동 후 새로고침하여 적용
                window.location.replace("/dashboard");

            } else {
                alert("로그인에 성공했지만 토큰을 받지 못했습니다.");
            }

        } catch (error) {
            console.error("로그인 중 에러 발생:", error);
            // ⭐️ 6. 더 구체적인 에러 메시지 제공
            if (error.response && error.response.status === 401) {
                alert("이메일 또는 비밀번호가 올바르지 않습니다.");
            } else {
                alert("로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
            }
        } finally {
            setIsLoading(false); // ⭐️ 7. 로딩 종료 (성공/실패 여부와 관계없이)
        }
    };

    return (
        <div className={styles.screen}>
            {/* form 태그로 감싸서 Enter 키로도 로그인 가능하도록 개선 */}
            <form className={styles.div} onSubmit={handleLogin}>
                <div className={styles.content}>
                    <div className={styles['input-button']}>
            <div className={styles.field}>
              <input
                type="email"
                className={styles.inputElement}
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <button type="submit" className={styles.button} disabled={isLoading}>
              <div className={styles['text-wrapper']}>
                {isLoading ? "로그인 중..." : "로그인"}
              </div>
            </button>
          </div> {/* ⭐️⭐️⭐️ input-button 상자는 여기서 닫혀야 합니다! ⭐️⭐️⭐️ */}

          {/* 구분선, 회원가입 버튼, 약관은 input-button 상자 바깥에 있어야 합니다. */}
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
                    {/* ... 이하 생략 ... */}
                </div>
                <div className={styles['text-wrapper-4']}>돌봄 시스템</div>
            </form>
        </div>
    );
};

export default LoginPage;