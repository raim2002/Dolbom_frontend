// src/pages/SignUpPage2/SignUpPage2.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./SignUpPage2.module.css";
import useSignUpStore from "../../store/useSignUpStore"; // 중앙 보관소 불러오기

const SignUpPage2 = () => {
  const navigate = useNavigate();
  
  // 1. 중앙 보관소에서 이메일, 비밀번호, 데이터 초기화 함수를 가져옵니다.
  const { email, password, reset } = useSignUpStore();

  // 2. 현재 페이지의 입력값을 위한 로컬 State 변수들
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [condition, setCondition] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  // '가입하기' 버튼 클릭 시 실행될 함수
  const handleSignUp = async () => {
    if (!name || !age || !height || !weight || !streetAddress || !detailAddress) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    // 3. 백엔드의 SignUpRequestDto 양식에 맞춰 모든 데이터를 하나의 객체로 합칩니다.
    const finalSignUpData = {
      email: email,
      password: password,
      patientName: name,
      age: parseInt(age),
      height: parseFloat(height),
      weight: parseFloat(weight),
      medicalHistory: condition,
      streetAddress: streetAddress,
      detailAddress: detailAddress,
    };

    console.log("백엔드로 전송할 최종 데이터:", finalSignUpData);

    try {
      // 4. 백엔드의 /api/auth/signup 주소로 최종 데이터를 전송합니다.
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        finalSignUpData
      );

      console.log("회원가입 성공:", response.data);
      alert("회원가입이 성공적으로 완료되었습니다!");
      
      reset(); // 5. 회원가입이 끝났으니 중앙 보관소의 데이터를 깨끗하게 비웁니다.
      navigate("/"); // 로그인 페이지로 이동

    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. (예: 이미 가입된 이메일)");
    }
  };

  return (
    <div className={styles.element}>
      <div className={styles.div}>
        <div className={styles['text-wrapper-3']}>회원가입</div>
        <div className={styles['text-wrapper-2']}>사용자 정보를 입력해주세요</div>

        <div className={styles.buttons}>
          <div className={styles['overlap-group']}>
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
                   <input type="text" placeholder="기저 질환 (없으면 비워두세요)" className={styles.inputElement} value={condition} onChange={(e) => setCondition(e.target.value)} />
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
          
          <button className={styles.button} onClick={handleSignUp}>
              <div className={styles['text-wrapper']}>가입하기</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage2;