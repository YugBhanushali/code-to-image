import { useRef, useState } from 'react'
import Canvas from './components/Canvas'
import ChangePaddingBtn from './components/ChangePaddingBtn'
import ConfigTableVisible from './components/ConfigTableVisible'
import Feature from './components/Feature'
import { GlobelThemeContext } from './Context/GlobelThemeContext'
import { VisibleContext } from './Context/VisibleContext'

function App() {
  const [count, setCount] = useState(0)
  const myRef = useRef(null);
  const [visiblity, setvisiblity] = useState(true)

  const [bgTheme, setbgTheme] = useState('solid');
  return (
    <>
      <VisibleContext.Provider value={{visiblity,setvisiblity}}>
        <div className="flex flex-col justify-center items-center">
          <GlobelThemeContext.Provider value={{bgTheme,setbgTheme}}>
              <Canvas sharedRef={myRef} />
              <Feature sharedRef={myRef} />
          </GlobelThemeContext.Provider>
        </div>
          <ConfigTableVisible/>
      </VisibleContext.Provider>
    </>
  )
}

export default App
