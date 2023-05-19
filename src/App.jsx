import { useState } from 'react'
import NewCard from './components/NewCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NewCard/>
    </div>
  )
}

export default App
