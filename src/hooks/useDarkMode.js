import React, {useState, useEffect} from 'react'
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    useEffect(() => {
        if (darkMode === true) {
            document.querySelector("body").classList.add("dark-mode");
            // setDarkMode(!darkMode)
        } else {
            document.querySelector("body").classList.remove("dark-mode");
            // setDarkMode(!darkMode)
        }
    },[darkMode])

    return [darkMode, setDarkMode]
}



export default useDarkMode;