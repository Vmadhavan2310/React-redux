import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked,reset } from './CakeReducer';
function CakeContainer() {
    const NumofCakes=useSelector(state=>state.Cake.numofCakes);
    const dispatch=useDispatch();
  return (
    <>
    <div>CakeContainers{NumofCakes}</div>
    <button onClick={()=>dispatch(ordered(1))}>Buy Cake</button>
    <button onClick={()=>dispatch(restocked(1))}>Return Cake</button>
    <button onClick={()=>dispatch(reset())}>Restock</button>
    </>
  )
}

export default CakeContainer