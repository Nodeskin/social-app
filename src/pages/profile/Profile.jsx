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
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src="assets/post/p5.jpg" alt="" />
            <img className="profileUserImg" src="assets/post/p7.jpg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Jamiu Shittu</h4>
            <span className="profileInfoDesc">Hello my friends</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feeds />
          <RightBar profile/>
            </div>     
        </div>   
      </div>
    </>
  )
}
