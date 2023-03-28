import { useRef, useState } from 'react'
import Canvas from './components/Canvas'
import ChangePaddingBtn from './components/ChangePaddingBtn'
import ConfigTableVisible from './components/ConfigTableVisible'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { GlobelThemeContext } from './Context/GlobelThemeContext'
import { VisibleContext } from './Context/VisibleContext'
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [count, setCount] = useState(0)
  const myRef = useRef(null);
  const [visiblity, setvisiblity] = useState(true)

  const [bgTheme, setbgTheme] = useState('solid');
  return (
    <>
      <VisibleContext.Provider value={{visiblity,setvisiblity}}>
        <Navbar/>
        <div className="flex flex-col justify-center items-center">
          <GlobelThemeContext.Provider value={{bgTheme,setbgTheme}}>
            <div className='flex justify-start lg:justify-center items-center overflow-x-auto m-auto  w-full px-8'>
              <Canvas sharedRef={myRef} />
            </div>
            <div className='flex m-[100px] justify-start lg:justify-center items-center sm:overflow-x-auto w-full '>
              <Feature sharedRef={myRef} />
            </div>
          </GlobelThemeContext.Provider>
          <Footer/>
        </div>
          <ConfigTableVisible/>
      </VisibleContext.Provider>
      <Analytics/>
    </>
  )
}

export default App
