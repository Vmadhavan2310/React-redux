import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restock, returns, sold } from './IceCreamReducer';

function IceCreamView() {
    const IceState=useSelector(state=>state.Ice.numOfIce);
    const dispatch=useDispatch()

  return (
    <>
    <div>IceCreamView {IceState}</div>
    <button onClick={()=>dispatch(sold(1))}>Purchase ICecream</button>
    <button onClick={()=>dispatch(returns(1))}>Return ICecream</button>
    <button onClick={()=>dispatch(restock())}>Restock ICecream</button>
    </>
  )
}

export default IceCreamView