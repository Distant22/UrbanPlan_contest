import React from 'react'
import Taipei from '../taipei.jpg'
import SubNews1 from '../subnews1.jpg'
import SubNews2 from '../subnews2.jpg'
import SubNews3 from '../subnews3.jpg'
import SubNews4 from '../subnews4.jpg'

function home() {
  return (
    <div class="font-Serif font-bold h-full w-full">
        <div class="h-2/5 w-full px-4 pt-4 relative justify-center flex">
            {/* <p class="text-white font-bold font-Serif absolute bottom-6 w-max tracking-wider">住都新風貌 打造嶄新台北</p> */}
            <img alt="headline" src={Taipei} class="h-full w-full border-3 border-black object-cover rounded-xl grid-cols-1 grid bg-red-300">
            </img>
        </div>
        <div class="h-2/5 grid grid-cols-2 relative">
            
        </div>
    </div>
  )
}

export default home