// src/pages/SignUpPage2/SignUpPage2.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./SignUpPage2.module.css";

const SignUpPage2 = () => {
  const navigate = useNavigate();

  // 1. 모든 입력란에 대한 State 변수를 만듭니다.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [condition, setCondition] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  // '가입하기' 버튼 클릭 시 실행될 함수
  const handleSignUp = async () => {
    // 간단한 유효성 검사
    if (!name || !age || !height || !weight || !streetAddress || !detailAddress) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    // 2. 회원가입(1) 페이지의 정보와 (2) 페이지의 정보를 모두 합쳐서 객체로 만듭니다.
    // (실제로는 Redux나 Context API 같은 상태 관리 라이브러리를 사용해 이전 페이지 정보를 가져옵니다)
    const finalSignUpData = {
      // email: 이전 페이지에서 가져온 email,
      // password: 이전 페이지에서 가져온 password,
      name: name,
      age: parseInt(age), // 숫자로 변환
      height: parseFloat(height), // 숫자로 변환
      weight: parseFloat(weight), // 숫자로 변환
      condition: condition,
      address: `${streetAddress} ${detailAddress}`,
    };

    console.log("최종 회원가입 데이터:", finalSignUpData);

    /*
    // 3. 최종 데이터를 백엔드 회원가입 API로 전송합니다. (현재는 주석 처리)
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register-final", // 최종 회원가입 API 주소 (예시)
        finalSignUpData
      );
      console.log("최종 회원가입 성공:", response.data);
      alert("회원가입이 성공적으로 완료되었습니다!");
      navigate("/"); // 로그인 페이지로 이동
    } catch (error) {
      console.error("최종 회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
    */
    
    // UI 흐름 테스트를 위해 임시로 성공 처리 후 페이지 이동
    alert("회원가입이 성공적으로 완료되었습니다!");
    navigate("/");
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
                {/* 4. 모든 div를 input 태그로 바꾸고 State와 연결합니다. */}
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
          
          {/* 5. '가입하기' 버튼에 onClick 이벤트를 연결합니다. */}
          <button className={styles.button} onClick={handleSignUp}>
            <div className={styles['text-wrapper']}>가입하기</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage2;