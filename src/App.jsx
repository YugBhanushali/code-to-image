import { useState } from 'react'
import Canvas from './components/Canvas'
import ChangePaddingBtn from './components/ChangePaddingBtn'
import Feature from './components/Feature'
import { GlobelThemeContext } from './Context/GlobelThemeContext'

function App() {
  const [count, setCount] = useState(0)

  const [bgTheme, setbgTheme] = useState('solid');
  return (
    <div className="flex justify-center items-center">
      <GlobelThemeContext.Provider value={{bgTheme,setbgTheme}}>
        <Canvas/>
        <Feature/>
      </GlobelThemeContext.Provider>
    </div>
  )
}

export default App
