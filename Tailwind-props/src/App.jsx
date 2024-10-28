import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name="farhan" myList={[1,2,3,4]} myObj={{username:"Farhan",age:20}} />
    </>
  )
}

export default App
