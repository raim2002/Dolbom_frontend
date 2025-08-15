// src/pages/SignUpPage2/SignUpPage2.jsx

import React, { useState } from "react";
// 1. Link 대신 useNavigate를 불러옵니다.
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage2.module.css";

const SignUpPage2 = () => {
  const navigate = useNavigate(); // 2. 페이지 이동 전문가를 준비시킵니다.

  // ... 이전에 만들었던 useState 코드들은 그대로 둡니다 ...
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [condition, setCondition] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  // 3. 버튼을 클릭했을 때 실행될 함수를 만듭니다.
  const handleSignUp = () => {
    // 나중에 여기에 실제 회원가입 로직(서버에 데이터 전송)을 추가합니다.
    console.log("가입하기 버튼 클릭!");
    navigate("/"); // 모든 작업이 끝나면 로그인 페이지('/')로 이동시킵니다.
  };

  return (
    <div className={styles.element}>
      <div className={styles.div}>
        {/* ... 상단 텍스트 부분은 그대로 ... */}
        <div className={styles['text-wrapper-3']}>회원가입</div>
        <div className={styles['text-wrapper-2']}>사용자 정보를 입력해주세요</div>

        <div className={styles.buttons}>
          <div className={styles['overlap-group']}>
            {/* ... 모든 input 태그들은 그대로 ... */}
            <div className={styles.content}>
              <div className={styles['input-button']}>
                <div className={styles['div-wrapper']}>
                   <input type="text" placeholder="피보호자 이름" className={styles.inputElement} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles['field-2']}>
                   <input type="number" placeholder="나이" className={styles.inputElement} value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className={styles['field-2']}>
                   <input type="number" placeholder="키" className={styles.inputElement} value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div className={styles['field-2']}>
                   <input type="number" placeholder="몸무게" className={styles.inputElement} value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className={styles['field-2']}>
                   <input type="text" placeholder="기저 질환" className={styles.inputElement} value={condition} onChange={(e) => setCondition(e.target.value)} />
                </div>
              </div>
            </div>
             <div className={styles.field}>
               <input type="text" placeholder="도로명 주소" className={styles.inputElement} value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
            </div>
            <div className={styles['label-wrapper']}>
               <input type="text" placeholder="상세 주소" className={styles.inputElement} value={detailAddress} onChange={(e) => setDetailAddress(e.target.value)} />
            </div>
          </div>

          {/* 4. Link 태그를 없애고, button에 onClick 이벤트를 추가합니다. */}
          <button className={styles.button} onClick={handleSignUp}>
            <div className={styles['label-2']}>
              <div className={styles['text-wrapper']}>가입하기</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage2;