import { Link } from "react-router-dom";

export default function TopBar() {
    return (
      <>
        <div class="h-[5rem] w-screen font-bold font-cwTeXYen flex justify-center bg-[#4C8E82]">
          <Link to={{pathname: '/forum'}} class="flex tracking-widest text-white text-xl items-center px-4 text-md justify-center">
            UTEPILS
          </Link>
        </div>
      </>
    );
  }