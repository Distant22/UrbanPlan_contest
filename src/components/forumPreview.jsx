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
              {title.length === 0 ? ( 
                <p onClick={() => handleTitle([file.title,file.content])} className="flex flex-col items-center h-1/6" >
                  <div key={key} class="rounded-lg bg-white h-full my-1 w-[95%] font-bold text-gray-700 flex items-center px-4">
                      {file.title}
                  </div>
                </p> 
              ) : ( <></> )}   
            </>
          );
        })}
        <>
          {title.length === 0 ? (<></>) : (
            <div class="h-full w-full font-Serif flex flex-col relative whitespace-pre-line tracking-wide">
              <p class="p-4 font-bold h-[10%] flex items-center border-b-2 border-gray-200">{ title[0] }</p>
              <p class="p-4 font-md h-full ">{ title[1] }</p>
              
              <p class="absolute bottom-4 right-4">
                <p onClick={() => {handleTitle("")}} class="h-[4rem] w-[4rem] bg-blue-200 flex items-center justify-center rounded-2xl">返回</p>
              </p>
            </div>
          )}
        </>
    </div>
  )
}