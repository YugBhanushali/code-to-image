import { useState } from 'react'
import Canvas from './components/Canvas'
import ChangePaddingBtn from './components/ChangePaddingBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Canvas/>
      <ChangePaddingBtn/>
    </div>
  )
}

export default App
