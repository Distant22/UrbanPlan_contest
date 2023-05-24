import React from 'react'
import CityBG from '../../citybg.jpg'
import Introduction from './Introduction'
import SubNews4 from '../../subnews4.jpg'
import ForumPreview from '../forumPreview'

function home() {
  return (
    <div class="font-Serif font-bold h-full w-full py-4">
        <div class="h-2/5 px-4 relative justify-center flex">
            {/* <p class="text-white font-bold font-Serif absolute bottom-6 w-max tracking-wider">住都新風貌 打造嶄新台北</p> */}
            <img alt="headline" src={CityBG} class="h-full w-full object-cover rounded-xl grid-cols-1 grid border-2 border-[#4C8E82]">
            </img>
        </div>
        <div class="overflow-x-scroll h-1/5 flex items-center">
          <Introduction />
        </div>
        <div class="h-1/5 mx-4 pb-2 flex bg-[#4C8E82] text-white hover:bg-[#FFEC95] hover:text-black duration-300 p-4 font-bold rounded-xl">
          社區本月公共用電量：2235度
        </div>
        <div class="h-max px-2 pt-2 pb-4">
          <div class="h-max w-full overflow-y-scroll">
            <ForumPreview />
          </div>
        </div>
        
    </div>
  )
}

export default home