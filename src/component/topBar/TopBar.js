import "./topBar.css";
import { FaSearch, FaUser, FaComment, FaBell } from "react-icons/fa";

export default function TopBar() {
  return (
    <>
      <div className="topBarContainer">
        <div className="topBarLeft">
          <span className="logo">nodeConnect</span>
        </div>

        <div className="topBarCenter">
          <div className="searchBar">
            <FaSearch className="searchIcon" />
            <input
              placeholder="Search for friends, post or video"
              className="searchInput"
            />
          </div>
        </div>

        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarLink">Homepage</span>
            <span className="topBarLink">Timeline</span>
          </div>

          <div className="topBarIcons">
            <div className="topBarIconItem">
              <FaUser className="topIcon" />
              <span className="topBarIconBadge"> 1</span>
            </div>
            <div className="topBarIconItem">
              <FaComment className="topIcon" />
              <span className="topBarIconBadge"> 2</span>
            </div>
            <div className="topBarIconItem">
              <FaBell className="topIcon" />
              <span className="topBarIconBadge">3</span>
            </div>
          </div>
          <img src="/assets/persons/img1.jpg" alt="" className="topBarImg" />
        </div>
      </div>
    </>
  );
}
