// import { useState, useEffect } from "react";

// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value, key, setValue]);

//   return [value, setValue];
// }

// export default useLocalStorage;

import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storeValue = localStorage.getItem(key);

      if (storeValue === null || storeValue === "undefined") {
        return initialValue;
      }

      return JSON.parse(storeValue);
    } catch (error) {
      console.error("Error leyendo localStorage", error);
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error guardando en LocalStorage", error);
    }
  };

  return [value, setStoredValue];
}
