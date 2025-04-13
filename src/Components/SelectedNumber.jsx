import React from 'react'

const SelectedNumber = () => {
    let Numbers = [1,2,3,4,5,6]
   
  return (
    <>
    <div className='flex gap-4 mt-4'>
        {Numbers.map((num)=>{
        return  <p key={num} className='border-1 h-12 w-12 flex justify-center items-center font-extrabold'>{num}</p> 
        })}
    </div>
    </>
  )
}

export default SelectedNumber
