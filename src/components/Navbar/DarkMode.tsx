import React, { useEffect, useState } from 'react'
import lightModeButton from "../../assets/light_mode.png"
import darkModeButton from "../../assets/dark_mode.png"

const DarkMode = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(
        (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    );
    useEffect(() => {
        const element = document.documentElement;
        if (theme === 'dark') {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
    
  return (
    <div className='relative'>
        { theme === 'light' ? (
            <img src={lightModeButton} alt='' onClick={toggleTheme}
                className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
            />
        ) : (
            <img src={darkModeButton} alt='' onClick={toggleTheme}
                className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
            />
        )}
    </div>
  )
}

export default DarkMode