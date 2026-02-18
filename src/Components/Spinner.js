import React from 'react'
import loadingBook from './loadingBook.gif'
const Spinner=()=>{
    return (
      <div className='spinner text-center my-5'>
        <img src={loadingBook} alt="Loading..." />
      </div>
    )
}
export default Spinner