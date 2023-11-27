import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPI } from './FetchReducer';

function ShowUserData() {
    const userDetails=useSelector(state=>state.fetchData)
    console.log(userDetails.payload)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchAPI())
    },[])
  return (
    <>
    <div>ShowUserDatas</div>
    {userDetails.loading&&<div>Loading Data</div>}
    {userDetails.payload.length>0 && userDetails.payload.map(item=>{
        return <h3 key={item.id}>{item.email}</h3>
    })}
    {userDetails.error&&<div>{userDetails.error}</div>}
    </>
  )
}

export default ShowUserData