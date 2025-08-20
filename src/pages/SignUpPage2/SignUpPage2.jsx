// src/pages/SignUpPage2/SignUpPage2.jsx

import React, { useState } from "react";
// --- 1. "router-dom" -> "react-router-dom"으로 수정 ---
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import styles from "./SignUpPage2.module.css";
import useSignUpStore from "../../store/useSignUpStore";

const SignUpPage2 = () => {
  const navigate = useNavigate();
  const { phoneNumber, email, password, reset } = useSignUpStore();

  // --- 입력값을 위한 State ---
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [condition, setCondition] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  // --- 에러 메시지를 위한 State ---
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [addressError, setAddressError] = useState("");

  // --- 유효성 검사 함수들 ---
  const validateName = (value) => {
    if (!value) {
      setNameError("이름을 입력해주세요.");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateNumberField = (value, fieldName, setError) => {
    if (!value) {
      setError(`${fieldName}을(를) 입력해주세요.`);
      return false;
    }
    if (isNaN(value) || Number(value) <= 0) {
      setError(`유효한 ${fieldName}을(를) 입력해주세요.`);
      return false;
    }
    setError("");
    return true;
  };

  const validateAddress = (street, detail) => {
    if (!street || !detail) {
      setAddressError("주소를 모두 입력해주세요.");
      return false;
    }
    setAddressError("");
    return true;
  };

  const handleSignUp = async () => {
    // --- '가입하기' 버튼 클릭 시 최종 유효성 검사 ---
    const isNameValid = validateName(name);
    const isAgeValid = validateNumberField(age, "나이", setAgeError);
    const isHeightValid = validateNumberField(height, "키", setHeightError);
    const isWeightValid = validateNumberField(weight, "몸무게", setWeightError);
    const isAddressValid = validateAddress(streetAddress, detailAddress);

    if (!isNameValid || !isAgeValid || !isHeightValid || !isWeightValid || !isAddressValid) {
      return; // 하나라도 유효하지 않으면 전송 중단
    }
    
    const finalSignUpData = {
      phoneNumber: phoneNumber,
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

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        finalSignUpData
      );
      console.log("회원가입 성공:", response.data);
      alert("회원가입이 성공적으로 완료되었습니다!");
      reset(); 
      navigate("/");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 입력 정보를 다시 확인해주세요.");
    }
  };

  return (
    <div className={styles.element}>
      <div className={styles.div}>
        <div className={styles['text-wrapper-3']}>회원가입</div>
        <div className={styles['text-wrapper-2']}>사용자 정보를 입력해주세요</div>

        <div className={styles.formContainer}>
          {/* --- 각 입력창에 실시간 유효성 검사 적용 --- */}
          <div className={styles.inputGroup}>
            <input type="text" placeholder="피보호자 이름" className={styles.inputElement} value={name} onChange={(e) => {setName(e.target.value); validateName(e.target.value);}} />
            {nameError && <p className={styles.errorMessage}>{nameError}</p>}
          </div>
          <div className={styles.inputGroup}>
            <input type="number" placeholder="나이" className={styles.inputElement} value={age} onChange={(e) => {setAge(e.target.value); validateNumberField(e.target.value, "나이", setAgeError);}} />
            {ageError && <p className={styles.errorMessage}>{ageError}</p>}
          </div>
          <div className={styles.inputGroup}>
            <input type="number" placeholder="키" className={styles.inputElement} value={height} onChange={(e) => {setHeight(e.target.value); validateNumberField(e.target.value, "키", setHeightError);}} />
            {heightError && <p className={styles.errorMessage}>{heightError}</p>}
          </div>
          <div className={styles.inputGroup}>
            <input type="number" placeholder="몸무게" className={styles.inputElement} value={weight} onChange={(e) => {setWeight(e.target.value); validateNumberField(e.target.value, "몸무게", setWeightError);}} />
            {weightError && <p className={styles.errorMessage}>{weightError}</p>}
          </div>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="기저 질환 (없으면 비워두세요)" className={styles.inputElement} value={condition} onChange={(e) => setCondition(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="도로명 주소" className={styles.inputElement} value={streetAddress} onChange={(e) => {setStreetAddress(e.target.value); validateAddress(e.target.value, detailAddress);}} />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="상세 주소" className={styles.inputElement} value={detailAddress} onChange={(e) => {setDetailAddress(e.target.value); validateAddress(streetAddress, e.target.value);}} />
            {addressError && <p className={styles.errorMessage}>{addressError}</p>}
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
