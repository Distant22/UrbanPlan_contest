import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faScroll, faMessage, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Footer(props) {

  const[click, setClick] = useState("");

  const handleClick = (value) => {
    setClick(value);
    props.onClick(value); // call the onClick function passed as a prop
  }

  return (
    <div class="w-screen h-[5rem] flex items-center justify-center">
      <div class="w-[calc(95%)] h-[3rem] items-center flex font-bold text-xs font-Serif">
        <FontAwesomeIcon onClick={() => handleClick("Home")} class={` ${click === "Home" ? "rounded-full bg-[#6ae66a] h-full w-1/4 transition-all duration-300 p-4" : "h-full p-4 w-1/4"}`} icon={faHouseChimney} />
        <FontAwesomeIcon onClick={() => handleClick("Announce")} class={` ${click === "Announce" ? "rounded-full bg-[#6ae66a] h-full w-1/4 transition-all duration-300 p-4" : "h-full p-4 w-1/4"}`} icon={faScroll} />
        <FontAwesomeIcon onClick={() => handleClick("Chat")} class={` ${click === "Chat" ? "rounded-full bg-[#6ae66a] h-full w-1/4 transition-all duration-300 p-4" : "h-full p-4 w-1/4"}`} icon={faMessage} />
        <FontAwesomeIcon onClick={() => handleClick("Map")} class={` ${click === "Map" ? "rounded-full bg-[#6ae66a] h-full w-1/4 transition-all duration-300 p-4" : "h-full p-4 w-1/4"}`} icon={faLayerGroup} />
      </div>
    </div>
  );
}
