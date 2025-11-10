'use client';
import {useTheme} from 'next-themes';

export default function ThemeToggle(){

    const {theme, setTheme} = useTheme();

    return (

        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? '🌞' : '🌙 '}
        </button>
    )


}