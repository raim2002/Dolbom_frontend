// src/pages/DashboardPage/DashboardPage.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import styles from "./DashboardPage.module.css";
import axios from 'axios';

const DashboardPage = () => {
    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

    // 1. 데이터를 두 개의 State로 분리하여 관리합니다.
    const [sensorData, setSensorData] = useState(null);
    const [activityScore, setActivityScore] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const patientId = 1; // 테스트용 피보호자 ID

                // 2. 두 개의 API를 동시에 호출합니다.
                const sensorPromise = axios.get(
                    `http://localhost:8080/api/sensor/latest/${patientId}`,
                    { headers: { Authorization: ` ${token}` } }
                );
                const scorePromise = axios.get(
                    `http://localhost:8080/api/sensor/activity-score/${patientId}`,
                    { headers: { Authorization: ` ${token}` } }
                );

                // Promise.all을 사용해 두 요청이 모두 끝날 때까지 기다립니다.
                const [sensorResponse, scoreResponse] = await Promise.all([sensorPromise, scorePromise]);

                // 3. 첫 번째 API 응답 (센서 데이터) 처리
                const sensorResult = sensorResponse.data;
                const formattedSensorData = {
                    temperature: sensorResult.temperature,
                    humidity: sensorResult.humidity,
                    fineDust: sensorResult.fineDust,
                    gas: sensorResult.vocs > 200 ? "감지" : "정상",
                };
                setSensorData(formattedSensorData);

                // 4. 두 번째 API 응답 (활동 점수) 처리
                const scoreResult = scoreResponse.data;
                setActivityScore(scoreResult);

                // 5. 활동 점수가 10점 이하일 경우 경고창을 띄웁니다.
                if (scoreResult <= 10) {
                    window.alert("경고: 오늘의 활동 점수가 매우 낮습니다! 확인이 필요합니다.");
                }

            } catch (error) {
                console.error("대시보드 데이터를 불러오는 데 실패했습니다:", error);
            }
        };

        fetchData();

        // 5초마다 데이터를 새로고침
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);

    }, []);

    // 버튼 클릭 시 동작할 함수
    const handleButtonClick = () => {
        // 활동 점수가 10점 이하일 때만 다른 URL로 이동
        if (activityScore !== null && activityScore <= 10) {
            // 예시: 긴급 상황 프로토콜 페이지로 이동
            navigate("/emergency"); 
        } else {
            // 평상시에는 다른 기능 수행 (예: 로봇 제어 페이지)
            console.log("일반 버튼 기능 수행");
            // navigate("/robot-control");
        }
    };

    // 데이터 로딩 중 화면
    if (!sensorData || activityScore === null) {
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
                    {/* 6. 버튼에 onClick 이벤트 핸들러를 연결합니다. */}
                    <button className={styles['field-2']} onClick={handleButtonClick}>
                        <div className={styles['text-wrapper-2']}>
                            {/* 점수가 낮으면 버튼 텍스트 변경 */}
                            {activityScore <= 10 ? "긴급 확인" : "로봇 제어"}
                        </div>
                    </button>
                    <div className={styles['field-3']}>
                        <div className={styles['label-2']}>오늘의 활동 점수</div>
                        {/* 활동 점수를 별도 State에서 가져옵니다. */}
                        <p className={styles.score}>{activityScore} 점</p>
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
