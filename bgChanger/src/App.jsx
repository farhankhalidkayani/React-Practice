import { useState } from "react"

function App() {
  const [color,setColor]= useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div class="flex space-x-4">
    <button class="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600" onClick={()=>setColor("red")}>
      Red
    </button>

    <button onClick={()=>setColor("blue")} class="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
      Blue
    </button>

    <button onClick={()=>setColor("green")} class="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">
      Green
    </button>

    <button onClick={()=>setColor("yellow")} class="px-4 py-2 font-semibold text-gray-800 bg-yellow-500 rounded-lg hover:bg-yellow-600">
      Yellow
    </button>

    <button onClick={()=>setColor("purple")} class="px-4 py-2 font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600">
      Purple
    </button>
  </div></div>
    </>
  )
}

export default App
