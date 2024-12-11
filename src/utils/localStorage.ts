// src/utils/localStorage.ts
export const saveToLocalStorage = (key: string, value: any) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  };
  
  export const getFromLocalStorage = <T>(key: string): T | null => {
    try {
      if (typeof window !== 'undefined') {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      }
      return null;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return null;
    }
  };