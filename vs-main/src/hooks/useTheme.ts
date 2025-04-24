import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  }, []);
  return theme;
}
