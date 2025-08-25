import React from 'react'
import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0);
    const [alert, setAlert] = useState('')
    return (
        <>

            <div className=" justify-center items-center flex flex-col w-screen h-screen bg-gray-400">
                <div className="flex flex-col bg-gray-300 p-[30px] gap-[30px] rounded-md w-[350px]">
                    <p className=" flex flex-col text-black-500 items-center justify-center font-sans text-2xl font-semibold"> You have clicked {count} times </p>
                    <p className="flex flex-col text-red-500 items-center justify-center font-sans"> {alert} </p>
                    <div className="flex flex-col gap-[20px] items-center font-sans ">
                        <button className=" cursor-pointer border-1 w-[70px] bg-blue-400 rounded-sm hover:scale-105 transition-transform duration-300" onClick={() => {setCount(count + 1); setAlert('')} } > +1 </button>
                        <button className=" cursor-pointer border-1 w-[70px] bg-blue-400 rounded-sm hover:scale-105 transition-transform duration-300" onClick={() => {setCount(count + 10); setAlert('')}} > +10 </button>
                        <button className=" cursor-pointer border-1 w-[70px] bg-blue-400 rounded-sm hover:scale-105 transition-transform duration-300" onClick={() => { if (count - 1 < 0) {setAlert("Cannot go below zero"); return; }setCount(count - 1); setAlert('') }} > -1 </button>
                        <button className=" cursor-pointer border-1 w-[70px] bg-blue-400 rounded-sm hover:scale-105 transition-transform duration-300" onClick={() => { if (count - 10 < 0) {setAlert("Cannot go below zero"); return;} setCount(count - 10); setAlert('')  }} > -10 </button>
                        <button className=" cursor-pointer border-1 w-[70px] bg-blue-400 rounded-sm hover:scale-105 transition-transform duration-300" onClick={() => {setCount(0); setAlert('')}} > Reset </button>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter; 