import React, { useState } from 'react'
import SelectedNumber from '../Components/SelectedNumber'
import Button from '../Components/Button'
import { useNavigate } from 'react-router';

const Play = () => {
  let resetscore= () =>{
    setScroe(0)
  }
  let navigate = useNavigate();

  let [score,setScroe] = useState(0)
  return (
    <>
    <div className=' container mx-auto flex-wrap  flex justify-between p-4'>
      <div >
        <h1 className='text-center font-extrabold text-4xl'>{score}</h1>
        <p className='text-center font-extrabold'>Total Score</p>
      </div>
    <SelectedNumber/>
    </div>


    <div className=' mt-10'>
      <div className='flex justify-center items-center  flex-col'>
        <img src="/src/assets/dice_1.png" alt="" />
        <p className='text-lg'>Click To Roll The Dice</p>
        <Button title={'Reset Score'} func={resetscore} className='bg-transparent w-50 hover:bg-black mt-5' />
        <Button title={'Show Rules'} navigate={navigate} to={'/rules'} className='bg-black w-50 hover:bg-gray-500 text-white mt-3' />

      </div>
    </div>
    </>
  )
}

export default Play
