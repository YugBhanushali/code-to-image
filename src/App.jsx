import { useState } from 'react'
import Canvas from './components/Canvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Canvas/>
    </div>
  )
}

export default App
