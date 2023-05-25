import React from 'react'
import { IconContext } from "react-icons";
import OldMan from '../oldman.jpg'
import { BsPersonCircle } from 'react-icons/bs';

function map() {
  return (
    <div class="font-Serif font-bold px-6 py-4 h-full">
      <div class="bg-gray-300 rounded-xl h-[30%] p-4 flex items-center mb-4">
        <div className="w-[25%] rounded-full">
            <img alt="avatar" src={OldMan} class="rounded-full" />
        </div>
        <div class="flex flex-col w-[70%]">
          <p class="text-2xl px-5 w-full">王先生</p>
          <p class="text-md px-5 text-gray-600 w-full">身份：住戶</p>
        </div>
      </div>
      <div class="h-[65%] bg-gray-300 p-4 rounded-xl mb-4">
        
      </div>
    </div>
  )
}

export default map