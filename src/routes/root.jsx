import TopBar from "../components/topbar";
import Footer from "../components/footer";
import ForumPreview from "../components/forumPreview";
import Home from "../components/home/home";
import Chat from "../components/chat";
import Map from "../components/map";
import { useState } from "react";

export default function Root() {

    const [footerValue, setFooterValue] = useState("Home");


    return (
      <div class="h-screen flex flex-col">
        <TopBar/>
        <p class="w-screen h-[0.1rem] bg-gray-300"></p>
        <div class="mb-auto h-full overflow-y-scroll">
          {footerValue === "Home" ? ( <Home /> ) : ( <> </> )}  
          {footerValue === "Announce" ? ( <ForumPreview /> ) : ( <> </> )}  
          {footerValue === "Chat" ? ( <Chat /> ) : ( <> </> )}  
          {footerValue === "Map" ? ( <Map /> ) : ( <> </> )}  
        </div>
        <p class="w-screen h-[0.1rem] bg-gray-300"></p>
        <Footer onClick={(click) => {setFooterValue(click);}} />
      </div>
    );
  }