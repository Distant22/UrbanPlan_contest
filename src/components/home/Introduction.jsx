import React from 'react'
import { FiMail } from 'react-icons/fi';
import { FaBatteryFull } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import { BsCreditCard } from 'react-icons/bs';
import { IconContext } from "react-icons";
import { BsThreeDots } from 'react-icons/bs';

function Introduction() {

  const arr = ["信件通知","節能報告","活動快訊","收繳管理","其他項目"]
  const iconList = [<FiMail />,<FaBatteryFull />,<AiFillSound />,<BsCreditCard />,<BsThreeDots />]

  const introBlock = arr.map((num,index) => <div class="h-full aspect-square rounded-xl border-2 border-[#4C8E82]  flex flex-col bg-gray-200 items-center justify-center">
      <p class="h-[calc(60%)] text-[#4C8E82] flex whitespace-pre-line items-end">
        {num}
      </p>
      <p class="flex h-[calc(40%)] items-start"><IconContext.Provider value={{ color: '#4C8E82' }}>{iconList[index]}</IconContext.Provider></p>
    </div>);

  return (

    <div class="h-full py-4 mx-4 w-max flex relative space-x-4 justify-between">
        { introBlock }

    </div>
  )
}

export default Introduction