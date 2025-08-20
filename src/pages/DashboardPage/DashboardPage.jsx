// src/pages/DashboardPage/DashboardPage.jsx

import React, { useState, useEffect } from "react";
import styles from "./DashboardPage.module.css";
import axios from 'axios'; // --- 1. axios import 주석 해제 ---

const DashboardPage = () => {
    const [sensorData, setSensorData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // --- 2. 실제 API 호출 로직으로 수정 ---
            try {
                // 로컬 스토리지에서 토큰을 가져옵니다. (로그인 시 저장되어 있어야 함)
                const token = localStorage.getItem('accessToken');
                const patientId = 1; // 테스트할 피보호자 ID

                const response = await axios.get(
                    `http://localhost:8080/api/sensor/latest/${patientId}`, // 템플릿 리터럴 사용
                    {
                        headers: {
                            Authorization: ` ${token}` // Bearer 접두사를 포함하여 토큰 전송
                        }
                    }
                );

                const responseData = response.data;
                console.log("서버로부터 받은 데이터:", responseData);

                // --- 3. 받은 데이터를 대시보드 UI에 맞게 가공 ---
                const formattedData = {
                    temperature: responseData.temperature,
                    humidity: responseData.humidity,
                    fineDust: responseData.fineDust,
                    gas: responseData.vocs > 200 ? "감지" : "정상", // vocs 값에 따라 상태 결정
                    activityScore: responseData.movementCount, // movementCount를 활동 점수로 매핑
                };

                setSensorData(formattedData); // State에 실제 데이터를 저장합니다.

            } catch (error) {
                console.error("대시보드 데이터를 불러오는 데 실패했습니다:", error);
                // 에러 발생 시 사용자에게 보여줄 수 있는 기본값 설정도 가능합니다.
                // setSensorData({ temperature: 'N/A', humidity: 'N/A', ... });
            }
        };

        fetchData(); // 함수 실행

        // 5초마다 데이터를 새로고침하고 싶다면 아래 주석을 해제하세요.
        const intervalId = setInterval(fetchData, 5000);
         return () => clearInterval(intervalId);

    }, []);

    if (!sensorData) {
        return <div className={styles.screen}><h1>데이터를 불러오는 중...</h1></div>;
    }

    return (
        <div className={styles.screen}>
            <div className={styles.div}>
                <div className={styles['text-wrapper']}>대시 보드</div>
                <div className={styles.frame}>
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