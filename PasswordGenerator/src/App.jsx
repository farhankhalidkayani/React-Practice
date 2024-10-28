import {useState,useCallback} from "react"
import './App.css'

function App() {
  const [length,setLength]= useState(8)
  const [numbersAllowed,setNumbersAlowed]=useState(false)
  const [charactersAllowed,setCharactersAllowed]=useState(false)
  const [password,setPassword]= useState("")
  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(charactersAllowed) str+='!@#$%^&*()-_=+[]{}|;:,.<>?/`~'
    if(numbersAllowed) str+='0123456789'

    for(let i=1;i<=length;i++){
      let char=Math.floot(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numbersAllowed,charactersAllowed,setPassword])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow rounder-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        />
      </div>
    </div>
    </>
  )
}

export default App
