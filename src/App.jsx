import { useState } from 'react'
import Canvas from './components/Canvas'
import ChangePaddingBtn from './components/ChangePaddingBtn'
import Feature from './components/Feature'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center">
      <Canvas/>
      {/* <ChangePaddingBtn/> */}
      <Feature/>
    </div>
  )
}

export default App
