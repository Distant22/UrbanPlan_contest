import React, { useState } from 'react'
import KungFu from '../kung-fu.png'
import Chess from '../chess.png'
import Cooking from '../cooking.png'
import Flower from '../flower.png'
import Guitar from '../guitar.png'
import { files } from '../groupFile'

export default function Group() {

  const [groupLabel, setGroupLabel] = useState("KungFu");

  const [expandIndex, setExpandIndex] = useState(null)
  const [renderText, setRenderText] = useState(false)

  const changeIndex = (idx) => {
    setRenderText(false)
    console.log("The 1st")
    setTimeout(() => {
      setExpandIndex(idx)
      setRenderText(true)
      console.log("The 2nd")
    }, 500);
  }

  const nothing = () => {

  }

  const changeLabel = (name) => {
    setGroupLabel(name)
    console.log(groupLabel)
  }

  return (
    <>
    <div class="overflow-x-scroll h-1/5">
      <div class="h-full w-max font-Serif font-bold px-4 space-x-4 flex items-center ">
          <div onClick={()=> {changeLabel("KungFu"); changeIndex(null)}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="kungfu" src={KungFu} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
          <div onClick={()=> {changeLabel("Chess"); changeIndex(null)}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="chess" src={Chess} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
          <div onClick={()=> {changeLabel("Cooking"); changeIndex(null)}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="cooking" src={Cooking} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
          <div onClick={()=> {changeLabel("Flower"); changeIndex(null)}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
            <img alt="flower" src={Flower} class="h-[calc(80%)] aspect-square rounded-full"></img>
          </div>
          <div onClick={()=> {changeLabel("Guitar"); changeIndex(null)}} class="h-2/3 hover:h-[calc(75%)] hover:bg-[#C7EFD4] duration-300 aspect-square rounded-full bg-[#D0DCD4] border-2 border-[#4C8E82] flex items-center justify-center">
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
                  <div onClick={() => { expandIndex === key ? nothing() : changeIndex(key) }} onMouseLeave={() => changeIndex(null)} key={key} class="w-[calc(95%)] h-1/4 hover:h-1/2 duration-500 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                      <p class="flex items-start justify-end">
                        <p class="flex items-start text-[#2F584F] w-full">{file.title}</p>
                        {/* <button class="bg-red-300" onClick={() => changeLike()}><IconContext.Provider value={{ size: '1.2rem' }}>{ like ? <AiOutlineLike /> : <AiTwotoneLike /> }</IconContext.Provider></button> */}
                      </p>
                      <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                      <p class={`${expandIndex === key && renderText ? "opacity-100 text-[#2F584F] text-sm mt-6 overflow-y-hidden" : "opacity-0"}`}>{file.content}</p>
                  </div>
                ) 
               : ( groupLabel === "Chess" && file.label === groupLabel ? (
                    <div onClick={() => { expandIndex === key ? nothing() : changeIndex(key) }} onMouseLeave={() => changeIndex(null)} key={key} class="w-[calc(95%)] h-1/4 hover:h-full duration-500 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                      <p class="flex items-start justify-end">
                        <p class="flex items-start text-[#2F584F] w-full">{file.title}</p>
                        {/* <button class="bg-red-300" onClick={() => changeLike()}><IconContext.Provider value={{ size: '1.2rem' }}>{ like ? <AiOutlineLike /> : <AiTwotoneLike /> }</IconContext.Provider></button> */}
                      </p>
                      <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                      <p class={`${expandIndex === key && renderText ? "whitespace-pre-line opacity-100 text-[#2F584F] text-sm mt-6 overflow-y-hidden" : "opacity-0"}`}>{file.content.split("<br/>").join("\n")}</p>
                    </div>
                  ) 
                : ( groupLabel === "Cooking" && file.label === groupLabel ? (
                      <div onClick={() => { expandIndex === key ? nothing() : changeIndex(key) }} onMouseLeave={() => changeIndex(null)} key={key} class="w-[calc(95%)] h-1/4 hover:h-full duration-500 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                          <p class="flex items-start justify-end">
                            <p class="flex items-start text-[#2F584F] w-full">{file.title}</p>
                            {/* <button class="bg-red-300" onClick={() => changeLike()}><IconContext.Provider value={{ size: '1.2rem' }}>{ like ? <AiOutlineLike /> : <AiTwotoneLike /> }</IconContext.Provider></button> */}
                          </p>
                          <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                          <p class={`${expandIndex === key && renderText ? "whitespace-pre-line opacity-100 text-[#2F584F] text-sm mt-6 overflow-y-hidden" : "opacity-0"}`}>{file.content.split("<br/>").join("\n")}</p>
                      </div>
                    ) 
                  : ( groupLabel === "Flower" && file.label === groupLabel ? (
                        <div onClick={() => { expandIndex === key ? nothing() : changeIndex(key) }} onMouseLeave={() => changeIndex(null)} key={key} class="w-[calc(95%)] h-1/4 hover:h-full duration-500 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                          <p class="flex items-start justify-end">
                            <p class="flex items-start text-[#2F584F] w-full">{file.title}</p>
                            {/* <button class="bg-red-300" onClick={() => changeLike()}><IconContext.Provider value={{ size: '1.2rem' }}>{ like ? <AiOutlineLike /> : <AiTwotoneLike /> }</IconContext.Provider></button> */}
                          </p>
                          <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                          <p class={`${expandIndex === key && renderText ? "whitespace-pre-line opacity-100 text-[#2F584F] text-sm mt-6 overflow-y-hidden" : "opacity-0"}`}>{file.content.split("<br/>").join("\n")}</p>
                        </div>
                    ) : ( groupLabel === "Guitar" && file.label === groupLabel ? (
                          <div onClick={() => { expandIndex === key ? nothing() : changeIndex(key) }} onMouseLeave={() => changeIndex(null)} key={key} class="w-[calc(95%)] h-1/4 hover:h-2/3 duration-500 rounded-3xl p-4 bg-[#D0DCD4] border-2 border-[#2F584F]">
                            <p class="flex items-start justify-end">
                              <p class="flex items-start text-[#2F584F] w-full">{file.title}</p>
                              {/* <button class="bg-red-300" onClick={() => changeLike()}><IconContext.Provider value={{ size: '1.2rem' }}>{ like ? <AiOutlineLike /> : <AiTwotoneLike /> }</IconContext.Provider></button> */}
                            </p>
                            <p class="text-[#5B8E81] text-sm">{file.subtitle}</p>
                            <p class={`${expandIndex === key && renderText ? "whitespace-pre-line opacity-100 text-[#2F584F] text-sm mt-6 overflow-y-hidden" : "opacity-0"}`}>{file.content.split("<br/>").join("\n")}</p>
                          </div>
                    ) : (<></>)
                  )
                )
               )) }
            </>
          );
        })}
    </div>
    </>
  )
}
