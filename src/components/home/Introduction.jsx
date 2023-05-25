import React from 'react'
import { FiMail } from 'react-icons/fi';
import { FaBatteryFull } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import { useState } from 'react'
import { BsCreditCard, BsThreeDots } from 'react-icons/bs';
import { IconContext } from "react-icons";

function Introduction() {

  const arr = ["信件通知","節能報告","活動快訊","收繳管理","其他項目"]
  const contentArr = ["您有五封信尚未讀取","月底預計於各大樓電梯內改裝節能空調，用電量將較過去減少1/3。",
  "今晚吉他社將於廣場舉辦成果發表會，現場備有零食，歡迎參加。","您仍有1000元管理費未繳納。","無新訊息"]
  const iconList = [<FiMail />,<FaBatteryFull />,<AiFillSound />,<BsCreditCard />,<BsThreeDots />]

  const [title, setTitle] = useState([])
  const [content, setContent] = useState([])

  const handleArr = (aValue, cValue) => {
    setTitle(aValue);
    setContent(cValue)
  }

  const introBlock = arr.map((num,index) => 
    <div onClick={() => handleArr(arr[index], contentArr[index])} class="h-full aspect-square rounded-xl border-2 border-[#4C8E82]  flex flex-col bg-gray-200 items-center justify-center">
      <p class="h-[calc(60%)] text-[#4C8E82] flex whitespace-pre-line items-end">
        {num}
      </p>
      <p class="flex h-[calc(40%)] items-start"><IconContext.Provider value={{ color: '#4C8E82' }}>{iconList[index]}</IconContext.Provider></p>
    </div>);

  return (
    <>
      <div class="h-full py-4 mx-4 w-max flex relative space-x-4 justify-between">
        { introBlock }
      </div>
      {title.length === 0 ? (<></>) : (
        <>
        <div onClick={() => {handleArr("","")}} class="absolute h-full w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-gray-200 opacity-70"></div>
          <div class="h-1/2 w-[80%] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-gray-200 border-2 border-[#4C8E82] rounded-2xl whitespace-pre-line tracking-wide">
            <p class="p-4 font-bold h-[20%] flex items-start text-xl">{ title }</p>
            <p class="pl-4 h-[60%] ">{ content }</p>
            <p class="h-[20%] flex items-end justify-end p-3"><div onClick={() => {handleArr("","")}} class="h-[100%] w-[30%] bg-[#4C8E82] hover:bg-[#FFEC95] hover:text-black text-white flex items-center justify-center rounded-xl duration-500">返回</div></p>
          </div>
        </>
      )}
    </>
  )
}

export default Introduction