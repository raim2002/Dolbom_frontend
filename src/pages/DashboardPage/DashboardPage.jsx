// src/pages/DashboardPage/DashboardPage.jsx

import React, { useState, useEffect } from "react";
import styles from "./DashboardPage.module.css";
// import axios from 'axios'; // 나중에 실제 API를 연결할 때 이 줄의 주석을 해제합니다.

const DashboardPage = () => {
  // 1. 센서 데이터를 저장할 '기억 공간(State)'을 만듭니다. 초기값은 null입니다.
  const [sensorData, setSensorData] = useState(null);

  // 2. useEffect는 페이지가 처음 로드될 때 딱 한 번 실행되는 특수 기능입니다.
  useEffect(() => {
    // 3. 나중에 실제 백엔드 API를 호출할 함수를 만듭니다.
    const fetchData = async () => {
      /*
      // --- 나중에 실제 API를 연결할 때 이 부분을 사용할 겁니다 ---
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(
          "http://localhost:8080/api/dashboard",
          { headers: { Authorization: token } } // 요청 시 토큰을 함께 보냅니다.
        );
        setSensorData(response.data);
      } catch (error) {
        console.error("대시보드 데이터를 불러오는 데 실패했습니다:", error);
      }
      */

      // 4. 지금은 테스트를 위해 더미(가짜) 데이터를 만듭니다.
      const dummyData = {
        temperature: 24.5,
        humidity: 55,
        fineDust: 30, // '좋음' 수준
        gas: "정상", // '정상' 또는 '감지'
        activityScore: 85,
      };
      
      console.log("더미 데이터를 불러옵니다:", dummyData);
      setSensorData(dummyData); // State에 더미 데이터를 저장합니다.
    };

    fetchData(); // 함수를 실행합니다.
  }, []); // []는 이 useEffect가 처음 한 번만 실행되도록 하는 옵션입니다.

  // 5. 데이터가 아직 로드되지 않았을 때 보여줄 화면
  if (!sensorData) {
    return <div className={styles.screen}><h1>데이터를 불러오는 중...</h1></div>;
  }

  // 6. 데이터가 로드된 후 보여줄 실제 대시보드 화면
  return (
    <div className={styles.screen}>
      <div className={styles.div}>
        <div className={styles['text-wrapper']}>대시 보드</div>
        <div className={styles.frame}>
          {/* 각 데이터를 State에 있는 값으로 채워 넣습니다. */}
          <div className={styles.field}>
            <div className={styles.label}>온도</div>
            <p className={styles.value}>{sensorData.temperature} °C</p>
          </div>
          <div className={styles['label-wrapper']}>
            <div className={styles.label}>미세먼지</div>
            <p className={styles.value}>{sensorData.fineDust} µg/m³</p>
          </div>
          <div className={styles['div-wrapper']}>
            <div className={styles.label}>습도</div>
            <p className={styles.value}>{sensorData.humidity} %</p>
          </div>
          <button className={styles['field-2']}>
            <div className={styles['text-wrapper-2']}>버튼</div>
          </button>
          <div className={styles['field-3']}>
            <div className={styles['label-2']}>오늘의 활동 점수</div>
            <p className={styles.score}>{sensorData.activityScore} 점</p>
          </div>
          <div className={styles['field-4']}>
            <div className={styles.label}>가스</div>
            <p className={styles.value}>{sensorData.gas}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;