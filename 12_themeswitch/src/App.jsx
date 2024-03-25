import { useState } from 'react'
import { ThemeProvider } from './Context/Theme'
import { useEffect } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

//VERY IMPORTANT
//make changes to tailwind configure-->darkMode:"class"

function App() {
  const [themeMode, setThemeMode] = useState('light')

  //if method is not there earlier then create them
  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  //actual change in the theme --by using classic javascript
  useEffect(() => {
    //removing everything present in initial
    document.querySelector('html').classList.remove('light', 'dark'),
      //adding the change
      document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
