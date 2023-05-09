import React from 'react'
import Taipei from '../../taipei.jpg'
import Introduction from './Introduction'
// import SubNews1 from '../../subnews1.jpg'
// import SubNews2 from '../../subnews2.jpg'
// import SubNews3 from '../../subnews3.jpg'
import SubNews4 from '../../subnews4.jpg'

function home() {
  return (
    <div class="font-Serif font-bold h-full w-full py-4">
        <div class="h-2/5 px-4 relative justify-center flex">
            {/* <p class="text-white font-bold font-Serif absolute bottom-6 w-max tracking-wider">住都新風貌 打造嶄新台北</p> */}
            <img alt="headline" src={Taipei} class="h-full w-full object-cover rounded-xl grid-cols-1 grid bg-red-300">
            </img>
        </div>
        <div class="overflow-x-scroll h-1/5 flex items-center">
          <Introduction />
        </div>
        <div class="h-1/5 px-4 pb-2 relative justify-center flex">
            <img alt="headline" src={SubNews4} class="h-full w-full object-cover rounded-xl grid-cols-1 grid bg-red-300">
            </img>
        </div>
        <div class="h-1/5 px-4 pt-2">
          <div class="h-full w-full border-2 border-black rounded-xl"></div>
        </div>
        
    </div>
  )
}

export default home