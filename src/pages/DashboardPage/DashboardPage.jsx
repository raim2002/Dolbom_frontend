// src/pages/DashboardPage/DashboardPage.jsx

import React from "react";
import styles from "./DashboardPage.module.css"; // CSS 파일 경로 수정

// 컴포넌트 이름을 Screen에서 DashboardPage로 변경
const DashboardPage = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.div}>
        <div className={styles['text-wrapper']}>대시 보드</div>
        <div className={styles.frame}>
          <div className={styles.field}>
            <div className={styles.label}>온도</div>
          </div>
          <div className={styles['label-wrapper']}>
            <div className={styles.label}>미세먼지</div>
          </div>
          <div className={styles['div-wrapper']}>
            <div className={styles.label}>습도</div>
          </div>
          <button className={styles['field-2']}>
            <div className={styles['text-wrapper-2']}>버튼</div>
          </button>
          <div className={styles['field-3']}>
            <div className={styles['label-2']}>오늘의 활동 점수</div>
          </div>
          <div className={styles['field-4']}>
            <div className={styles.label}>가스</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; // export 추가