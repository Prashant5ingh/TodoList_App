import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    // id could be number or string, it depends on how you are passing it in the URL
    // useParams is a hook that returns an object of key value pairs of the parameters passed
    const {id}=useParams() // useParams is used to get the parameters from the URL like id, name etc.
    
    
    // if id is not provided, it will return undefined or msg in div section or alert msg.
    if(!id) return <div className='bg-gray-600 text-center text-white text-3xl p-4'>No User ID Provided</div>
   
    return (
    <div className='bg-gray-600 text-center text-white text-3xl p-4'>User params fetch: {id}</div>
  )
}

export default User