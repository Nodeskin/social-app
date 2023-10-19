import "./profile.css"
// import "./home.css";
import SideBar from "../../component/sideBar/SideBar";
import TopBar from "../../component/topBar/TopBar";
import RightBar from "../../component/rightBar/RightBar";
import Feeds from "../../component/feeds/Feeds";

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
        <div className="profileRightTop">Check it</div>
        <div className="profileRightBottom">
          <Feeds />
          <RightBar />
            </div>
        
        </div>
        
      </div>
    </>
  )
}
