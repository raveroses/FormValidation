import { useState } from "react";
export default function useLocalStorage(key, initialValue) {
  const [storeValue, setStorValue] = useState(() => {
    try {
      const save = window.localStorage.getItem(key);
      return save ? JSON.parse(save) : initialValue;
    } catch (err) {
      console.log(err.message);
      return initialValue;
    }
  });

  const setLocalStorages = (value) => {
    try {
      setStorValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err.message);
    }
  };
  return [storeValue, setLocalStorages];
}
