import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,sum } from './redux/features'
function App() {
const dispatch=useDispatch();
const count=useSelector((state)=>state.count.value)
const [num,setNum]=useState();
  return (
   <div>
    {count}
    <br /><br />
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <br />
    <br />
    <input type="number" value={num} onChange={(e)=>setNum(e.target.value) } placeholder='enter the number' />
    <button onClick={()=>dispatch(sum(Number(num)))}>incre</button>
   </div>
  )
}

export default App
