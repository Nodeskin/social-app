import "./home.css";
import SideBar from "../../component/sideBar/SideBar";
import TopBar from "../../component/topBar/TopBar";
import RightBar from "../../component/rightBar/RightBar";
import Feeds from "../../component/feeds/Feeds";

export default function Home() {
  return (
    <>
      <TopBar />
      <div class="homeContainer">
        <SideBar />
        <Feeds />
        <RightBar />
      </div>
    </>
  );
}
