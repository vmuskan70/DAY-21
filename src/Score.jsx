import React, { useState } from 'react'
let sc=0;
function Score() {
    const [score,setScore]=useState(0);
  return (
  <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500'>
    <div className='bg-white p-10 rounded-2x1 shadow-2x1 shadow-green-500 text-center w-[350px]'>
    <h2 className='text-4xl font-bold text-gray-700 mb-2'>
Cricket Score
  </h2>
  <p className='hidden text-gray-500 mb-6'>State Example Using<span className='font-bold'>useState()</span></p>
<h1 className='text-7xl font-extrabold text-blue-600 mb-8'> {score}</h1>
<button className='bg-blue-600 px-8 py-3 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,1)] mb-2'onClick={()=>{
    setScore(score+1);
}}>
    increament</button>
    <button className='bg-blue-600 px-8 py-3 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,1)] ml-4 mb-2 me-4'onClick={()=>{
    setScore(score >0? score -1:0);
}}>
    decreament</button>
    <button className='bg-blue-600 px-8 py-3 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,1)] ml-2 me-4' onClick={()=>{
        setScore(0)
    }}>Reset</button>
  </div>
  </div>
  )
}

export default Score
  {/* <h1>{sc}</h1>
  <button>CLICK ME</button> */}
      {/* hello */}