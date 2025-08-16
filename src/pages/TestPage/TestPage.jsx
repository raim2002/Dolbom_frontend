// src/pages/TestPage/TestPage.jsx

import React from 'react';
import useSignUpStore from '../../store/useSignUpStore';

const TestPage = () => {
  // 중앙 보관소(Zustand Store)의 모든 데이터를 가져옵니다.
  const storeData = useSignUpStore((state) => state);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Zustand 중앙 보관소 데이터 확인</h1>
      <p>이 페이지는 현재 중앙 보관소에 저장된 모든 데이터를 보여줍니다.</p>
      <hr />
      
      {/* pre 태그는 JSON 객체를 예쁘게 보여줍니다. */}
      <pre style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
        {JSON.stringify(storeData, null, 2)}
      </pre>
    </div>
  );
};

export default TestPage;