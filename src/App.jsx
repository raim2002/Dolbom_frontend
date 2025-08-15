// src/App.jsx

import './App.css'
import { Routes, Route } from 'react-router-dom'; // 1. Routes와 Route를 import

// 2. 우리가 만든 모든 페이지 컴포넌트를 import 합니다.
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage1 from './pages/SignUpPage1/SignUpPage1';
import SignUpPage2 from './pages/SignUpPage2/SignUpPage2';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App() {
  return (
    // 3. 페이지 이동 규칙을 정의합니다.
    <Routes>
      {/* 주소가 '/' 이면 LoginPage를 보여줍니다. */}
      <Route path="/" element={<LoginPage />} />
      {/* 주소가 '/signup' 이면 SignUpPage1을 보여줍니다. */}
      <Route path="/signup" element={<SignUpPage1 />} />
      {/* 주소가 '/signup-info' 이면 SignUpPage2를 보여줍니다. */}
      <Route path="/signup-info" element={<SignUpPage2 />} />
      {/* 주소가 '/dashboard' 이면 DashboardPage를 보여줍니다. */}
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App;