// src/pages/DashboardPage/DashboardPage.jsx

import React, { useState, useEffect } from "react";
import styles from "./DashboardPage.module.css";
import axios from 'axios';

const DashboardPage = () => {
    const [sensorData, setSensorData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const patientId = 1;

                const response = await axios.get(
                    `http://localhost:8080/api/sensor/latest/${patientId}`,
                    {
                        headers: {
                            // ✅ 수정 1: 토큰 앞에 불필요한 공백 제거
                            Authorization: token
                        }
                    }
                );

                const responseData = response.data;
                console.log("서버로부터 받은 데이터:", responseData);

                const formattedData = {
                    temperature: responseData.temperature,
                    humidity: responseData.humidity,
                    fineDust: responseData.fineDust,
                    gas: responseData.vocs > 200 ? "감지" : "정상",
                    activityScore: responseData.movementCount,
                };

                setSensorData(formattedData);

            } catch (error) {
                console.error("대시보드 데이터를 불러오는 데 실패했습니다:", error);
            }
        };

        fetchData(); // 컴포넌트가 처음 로드될 때 한 번 실행

        // 5초마다 데이터를 새로고침
        const intervalId = setInterval(fetchData, 5000);

        // ✅ 수정 2: 컴포넌트가 사라질 때 setInterval을 정리(cleanup)하여 메모리 누수 방지
        return () => clearInterval(intervalId);

    }, []); // 의존성 배열이 비어있으므로 이 useEffect는 마운트될 때 한 번만 실행됩니다.

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