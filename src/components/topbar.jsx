import { Link } from "react-router-dom";

export default function TopBar() {
    return (
      <>
        <div class="h-[5rem] w-screen font-bold font-Serif flex">
          <Link to={{pathname: '/forum'}} class=" flex items-center px-4 text-md">
            地政住都競賽
          </Link>
        </div>
      </>
    );
  }