import { useState } from 'react'
import './App.css'
import NavComponent from './components/NavComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container p-5'  >
      <NavComponent/>
      <h1>
        หน้าแรก
      </h1>
      <hr />
    </div>
  )
}

export default App
