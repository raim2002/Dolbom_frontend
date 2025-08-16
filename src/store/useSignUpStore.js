// src/store/useSignUpStore.js

import { create } from 'zustand';

// 회원가입 데이터를 보관할 보관소(store)를 만듭니다.
const useSignUpStore = create((set) => ({
  // 1. 보관할 데이터들
  email: '',
  password: '',
  name: '',
  age: '',
  height: '',
  weight: '',
  condition: '',
  address: '',

  // 2. 데이터를 수정하는 함수들
  setEmail: (email) => set({ email: email }),
  setPassword: (password) => set({ password: password }),
  setUserInfo: (userInfo) => set({
    name: userInfo.name,
    age: userInfo.age,
    height: userInfo.height,
    weight: userInfo.weight,
    condition: userInfo.condition,
    address: userInfo.address,
  }),
  
  // 3. 모든 데이터를 초기화하는 함수
  reset: () => set({
    email: '',
    password: '',
    name: '',
    age: '',
    height: '',
    weight: '',
    condition: '',
    address: '',
  }),
}));

export default useSignUpStore;