import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/all'

export default function Page2() {

  const modeChoice = useSelector((store:any) => store.mode)
  const durationChoice = useSelector((store:any) => store.duration)

  const navigator = useNavigate();

  return (
    <div
      className=''
    >
      <nav>
        <button
          onClick={()=>{navigator(-1)}}
          className=' p-[3ch]'
        >
          <BsArrowLeft className='text-4xl' />
        </button>
      </nav>

    </div>
  )
}
