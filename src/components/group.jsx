import React, { useState } from 'react'
import KungFu from '../kung-fu.png'
import Chess from '../chess.png'
import Cooking from '../cooking.png'
import Flower from '../flower.png'
import Guitar from '../guitar.png'
import { files } from '../groupFile'

export default function Group() {

  const [groupLabel, setGroupLabel] = useState("KungFu");
  const [like, setLike] = useState(1)

  const changeLabel = (name) => {
    setGroupLabel(name)
    console.log(groupLabel)
  }

  const changeLike = () => {
    setLike(like+1)
    console.log(like)
  }

  return (
    <>
    <div class="overflow-x-scroll h-1/5">
      <div class="h-full w-max font-Serif font-bold px-4 space-x-4 flex items-center ">
          <div onClick={()=> {changeLabel("KungFu")}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="kungfu" src={KungFu} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
          <div onClick={()=> {changeLabel("Chess")}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="chess" src={Chess} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
          <div onClick={()=> {changeLabel("Cooking")}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="cooking" src={Cooking} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
          <div onClick={()=> {changeLabel("Flower")}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="flower" src={Flower} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
          <div onClick={()=> {changeLabel("Guitar")}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="guitar" src={Guitar} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
      </div>
    </div>
    <div class="h-4/5 w-screen font-cwTeXYen p-4 font-bold space-y-4">
      {files.map((file, key) => {
          return (
            <>
              { groupLabel === "KungFu" && file.label === groupLabel ? 
                (
                  <div key={key} class="w-[calc(95%)] h-1/4 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                      <p class="text-[#2F584F]">{file.title}</p>
                      <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                  </div>
                ) 
               : ( groupLabel === "Chess" && file.label === groupLabel ? (
                    <div key={key} class="w-[calc(95%)] h-1/4 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                        <p class="text-[#2F584F]">{file.title}</p>
                        <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                    </div>
                  ) 
                : ( groupLabel === "Cooking" && file.label === groupLabel ? (
                    <div key={key} class="w-[calc(95%)] h-1/4 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                        <p class="text-[#2F584F]">{file.title}</p>
                        <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                    </div>
                    ) 
                  : ( groupLabel === "Flower" && file.label === groupLabel ? (
                      <div key={key} class="w-[calc(95%)] h-1/4 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                          <p class="text-[#2F584F]">{file.title}</p>
                          <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                      </div>
                    ) : (<></>)
                )
               )) }
            </>
          );
        })}
    </div>
    </>
  )
}
