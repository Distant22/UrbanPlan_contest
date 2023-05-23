import { SlHome } from 'react-icons/sl';
import { RiGroupLine } from 'react-icons/ri';
import { BsChatLeftText } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { useState } from 'react';
import { motion } from "framer-motion"; 
import { IconContext } from "react-icons";


export default function Footer(props) {

  const[click, setClick] = useState("");

  const handleClick = (value) => {
    setClick(value);
    props.onClick(value); // call the onClick function passed as a prop
  }

  return (
    <div class="w-screen h-[5rem] flex items-center justify-center bg-white">
      <div class="w-[calc(95%)] h-[3rem] items-center flex font-bold text-xs font-Serif">
      <IconContext.Provider value={{ color: click === "Home" ? 'white' : 'black' }}>
        <SlHome onClick={() => handleClick("Home")} class={` ${click === "Home" ? "rounded-full bg-[#4C8E82]  h-full w-1/4 p-3 duration-300" : "h-full p-3 w-1/4 duration-300"}`} />
      </IconContext.Provider>
      <IconContext.Provider value={{ color: click === "Announce" ? 'white' : 'black' }}>
        <RiGroupLine onClick={() => handleClick("Announce")} class={` ${click === "Announce" ? "rounded-full bg-[#4C8E82]  h-full w-1/4 p-3 duration-300" : "h-full p-3 w-1/4 duration-300"}`} />
      </IconContext.Provider>
      <IconContext.Provider value={{ color: click === "Chat" ? 'white' : 'black' }}>
        <BsChatLeftText onClick={() => handleClick("Chat")} class={` ${click === "Chat" ? "rounded-full bg-[#4C8E82]  h-full w-1/4 p-3 duration-300" : "h-full p-3 w-1/4 duration-300"}`} />
      </IconContext.Provider>
      <IconContext.Provider value={{ color: click === "Setting" ? 'white' : 'black' }}>
        <FiSettings onClick={() => handleClick("Setting")} class={` ${click === "Setting" ? "rounded-full bg-[#4C8E82] h-full w-1/4 p-3 duration-300" : "h-full p-3 w-1/4 duration-300"}`} />
      </IconContext.Provider>
        {/* bg-gradient-to-r from-[#8ae6df] to-[#89faba] */}
      </div>
    </div>
  );
}