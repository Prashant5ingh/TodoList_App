import React, { useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import Themebtn from './Themebtn';
import Card from './Card';

function ThemeContextAPI() {

    const [themeMode, setThemeMode] = React.useState("light");
    
    // Adding functionality of these method
    const lightTheme = () =>{
        setThemeMode("light")
    }
    const darkTheme = () =>{
        setThemeMode("dark")
    }

    // Actual change in theme
    useEffect(()=>{
         document.querySelector('html').classList.remove("light","dark")
         document.querySelector('html').classList.add(themeMode)
    
        }, [themeMode])
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

  
  </ThemeProvider>
  )
}

export default ThemeContextAPI
