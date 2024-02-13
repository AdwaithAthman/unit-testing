import './App.css'
import { useState } from 'react'

function App() {
const [count, setCount] = useState(0)
  return (
    <>
     <h1>Hello 1</h1>
     <h2>Hello 2</h2>
     <span data-testid="span">10</span>

     <p data-testid="p">{count}</p>
     <input type="text" />
     <button onClick={() => setCount(prev => prev + 1)}>Submit</button>
    </>
  )
}

export default App
