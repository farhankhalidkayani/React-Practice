import {useState,useCallback, useEffect, useRef } from "react"
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
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numbersAllowed,charactersAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[charactersAllowed,numbersAllowed,length ,passwordGenerator])
  const passwordRefernce= useRef(null)
  const copyPassword= useCallback(()=>{
    passwordRefernce.current?.focus()
    passwordRefernce.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow rounder-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        ref={passwordRefernce}
        readOnly
        />
        <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2" >
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}} />
          <label >Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1"><input type="checkbox" defaultChecked={numbersAllowed} id="numberInput" onChange={()=>{
          setNumbersAlowed((prev)=>!prev)
        }} />
        <label htmlFor="numberInput">Numbers</label></div>
        <div className="flex items-center gap-x-1"><input type="checkbox" defaultChecked={charactersAllowed} id="characterInput" onChange={()=>{
          setCharactersAllowed((prev)=>!prev)
        }} />
        <label htmlFor="characterInput">Characters</label></div>
      </div>
    </div>
    </>
  )
}

export default App
