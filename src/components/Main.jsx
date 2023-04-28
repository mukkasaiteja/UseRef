import {useState, useRef} from 'react'
import './Main.css'

function Main() {
    const [data,setData]=useState(0);
    const timerId=useRef(0);
    const startTimer=()=>{
    timerId.current=    setInterval(()=>{
            setData((prevData)=>prevData + 1)
        },1000)
    }
    const stopTimer=()=>{
        clearInterval(timerId.current)
    }
    const resetTimer=()=>{
        setData(data === 0)
    }
  return (
    <div className='main'>
        <h1>Stop Watch Using reactjs</h1>
        <h2>{data}</h2>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default Main