import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
          <ThemeButton />
        </div>
        <div className='w-full max-w-sm mx-auto'>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
