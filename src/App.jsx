import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const Add  = () =>{
     setCount(count +1)
  }
  const Remove  = () =>{
    if(count > 0)
     setCount(count -1)
  }

      const formatCount = count.toString().padStart(2,"0");

  return (
    <>
      <div className='w-full h-screen bg-gradient-to-br to-green-500 from-sky-500 flex justify-center'>
      <h1 className='text-teal-300 cursor-default absolute text-6xl font-bold top-10' style={{fontFamily:'cursive'}}>Counter App</h1>

        <div className='w-100  h-100  bg-black/30 rounded-lg shadow-lg  shadow-black fixed top-35'> 

          <div className='w-100 h-50 flex justify-center '> 
            <h1 className='text-9xl absolute text-white font-bold top-5'>{formatCount}</h1>
            <hr class="w-90 border-2 border-green-500  absolute top-45"/>
          </div>
          <div className='w-100 h-50 flex absolute top-70 justify-around'>
            <button onClick={Add}    className='cursor-pointer h-15 rounded bg-sky-400/30 text-sky-300 border-2 border-sky-400 text-3xl font-bold w-40 hover:bg-sky-500 hover:text-white hover:scale-110 active:bg-sky-600 transition duration-200'>Add </button>
            <button onClick={Remove} className='cursor-pointer h-15 rounded bg-red-400/30 text-red-300 border-2 border-red-400 text-3xl font-bold w-40 hover:bg-red-500 hover:text-white hover:scale-110 active:bg-red-600 transition duration-200'>Remove </button>
            <p className='text-white absolute text-sm  bottom-22' style={{fontFamily:'monospace'}}>Developer By: Ahmed_Khan</p>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
