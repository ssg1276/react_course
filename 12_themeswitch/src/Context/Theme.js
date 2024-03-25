import { createContext, useContext } from 'react'

//different approach
export const ThemeContext = createContext({
  themeMode: 'light', //default setting
  darkTheme: () => {}, //method
  lightTheme: () => {}, //method
})

//direct exporting provider inside it only
export const ThemeProvider = ThemeContext.Provider

//custom hooks
export default function useTheme() {
  return useContext(ThemeContext)
}
