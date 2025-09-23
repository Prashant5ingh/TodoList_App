import { createContext, useContext } from "react";

// Using different syntax to create and use context than previous context API project.
// directly passing default values in createContext function.
export const ThemeContext = createContext({themeMode: "light",
    toggleTheme: () => {},
    darkTheme: () => {},
    lightTheme: () => {}

});

// creating provider component here itself.
export const ThemeProvider = ThemeContext.Provider;


//custom hook to use the context
export default function useTheme() {
    return useContext(ThemeContext)
}