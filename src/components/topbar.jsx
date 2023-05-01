import { Link } from "react-router-dom";

export default function TopBar() {
    return (
      <>
        <div class="h-32 bg-topbar flex items-center ">
          <Link to={{pathname: '/'}} class="ml-10 text-3xl font-bold">
          你的 AI 旅遊小幫手
          </Link>
        </div>
      </>
    );
  }