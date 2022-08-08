import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialValue
  );

  useEffect(() => {
    const stringyfyData = JSON.stringify(data);
    localStorage.setItem(key, stringyfyData);
  }, [data, key]);

  return [data, setData];
};
export default useLocalStorage;
