import TopBar from "../components/topbar";
import SearchBox from "../components/searchBox";
import TravelSpot from "../components/travelSpot";

export default function Root() {
    return (
      <>
        <TopBar/>
        {/* <SearchBox/> */}
        <TravelSpot />
        <div id="topbar">
          
        </div>
        <div id="detail">

        </div>
      </>
    );
  }