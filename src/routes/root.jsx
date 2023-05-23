import TopBar from "../components/topbar";
import Footer from "../components/footer";
import Group from "../components/group";
import Home from "../components/home/home";
import Chat from "../components/chat";
import Setting from "../components/setting";
import { useState } from "react";

export default function Root() {

    const [footerValue, setFooterValue] = useState("Home");


    return (
      <div class="h-screen flex flex-col bg-gray-100">
        <TopBar/>
        {/* <p class="w-screen h-[0.1rem] bg-gray-300"></p> */}
        <div class="mb-auto h-full overflow-y-scroll">
          {footerValue === "Home" ? ( <Home /> ) : ( <> </> )}  
          {footerValue === "Announce" ? ( <Group /> ) : ( <> </> )}  
          {footerValue === "Chat" ? ( <Chat /> ) : ( <> </> )}  
          {footerValue === "Setting" ? ( <Setting /> ) : ( <> </> )}  
        </div>
        {/* <p class="w-screen h-[0.1rem] bg-gray-300"></p> */}
        <Footer onClick={(click) => {setFooterValue(click);}} />
      </div>
    );
  }