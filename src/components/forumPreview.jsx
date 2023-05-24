import React, { useState } from 'react'
import { files } from '../forumFile'

export default function ForumPreview() {

  const [title, setTitle] = useState([])

  const handleTitle = (value) => {
    setTitle(value);
  }

  return (
    <div class="h-full w-full">
        {files.map((file, key) => {
          return (
            <>
              <p onClick={() => handleTitle([file.title,file.content])} className="flex flex-col items-center h-[5rem]" >
                <div key={key} class="rounded-lg border-2 border-[#4C8E82] bg-gray-100 h-full my-1 w-[95%] font-bold text-gray-700 flex items-center px-4">
                    {file.title}
                </div>
              </p> 
            </>
          );
        })}
        <>
          {title.length === 0 ? (<></>) : (
            <>
            <div onClick={() => {handleTitle("")}} class="absolute h-full w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-gray-200 opacity-70"></div>
              <div class="h-2/3 w-2/3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-[#D0DCD4] border-2 border-[#4C8E82] rounded-2xl whitespace-pre-line tracking-wide">
                <p class="p-4 font-bold h-[20%] flex items-center border-b-2 border-[#4C8E82]">{ title[0] }</p>
                <p class="p-4 font-md h-[65%] overflow-y-scroll bg-gray-50">{ title[1] }</p>
                <p class="h-[15%] flex items-center justify-end p-3 border-t-2 border-[#4C8E82]"><div onClick={() => {handleTitle("")}} class="h-full w-[30%] bg-[#4C8E82] hover:bg-[#FFEC95] hover:text-black text-white flex items-center justify-center rounded-xl duration-500">返回</div></p>
              </div>
            </>
          )}
        </>
    </div>
  )
}