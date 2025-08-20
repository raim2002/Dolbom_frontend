// src/store/useSignUpStore.js

import { create } from 'zustand';

const useSignUpStore = create((set) => ({
  // 1. phoneNumber를 email 위에 추가
  phoneNumber: '',
  email: '',
  password: '',
  name: '',
  age: '',
  height: '',
  weight: '',
  condition: '',
  address: '',

  // 2. setPhoneNumber 함수 추가
  setPhoneNumber: (phone) => set({ phoneNumber: phone }),
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
  
  // 3. reset 함수에 phoneNumber 초기화 추가
  reset: () => set({
    phoneNumber: '',
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
