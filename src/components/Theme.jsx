import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'


export const Theme = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return 'dark'
        }
        return 'light'
    })

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        console.log(theme);
    }
    return (
        <div>
            <button onClick={handleTheme} className='p-2 m-3 fixed z-50'>
                {theme === 'dark' ? (
                    <BsFillMoonFill  className='text-detLight sm:h-[32px] sm:w-[32px]'/>
                ) : (
                    <BsFillSunFill  className='text-details sm:h-[32px] sm:w-[32px]'/>
                )}
        </button>
        </div >
    )
}
