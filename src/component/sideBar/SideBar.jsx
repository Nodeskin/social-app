import "./sideBar.css"
import { RssFeed, HelpOutline, WorkOutline, Event, School, Bookmark, Group, PlayCircleFilledOutlined, Chat } from "@mui/icons-material";
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";

export default function SideBar() {
  return (
    <div className="sideBar">
     <div className="sideBarWrapper">
        <ul className="sideBarList">
            <li className="sideBarListItem">
                <RssFeed className="sideBarIcon"/>
                <span className="SideBarListItemText">Feed</span>
            </li>

            <li className="sideBarListItem">
                <Chat className="sideBarIcon"/>
                <span className="SideBarListItemText">Chats</span>
            </li>
            <li className="sideBarListItem">
                <PlayCircleFilledOutlined className="sideBarIcon"/>
                <span className="SideBarListItemText">Videos</span>
            </li>
            <li className="sideBarListItem">
                <Group className="sideBarIcon"/>
                <span className="SideBarListItemText">Groups</span>
            </li>
            <li className="sideBarListItem">
                <Bookmark className="sideBarIcon"/>
                <span className="SideBarListItemText">Bookmarks</span>
            </li>
            <li className="sideBarListItem">
                <HelpOutline className="sideBarIcon"/>
                <span className="SideBarListItemText">Question</span>
            </li>

            <li className="sideBarListItem">
                <WorkOutline className="sideBarIcon"/>
                <span className="SideBarListItemText">Jobs</span>
            </li>
            <li className="sideBarListItem">
                <Event  className="sideBarIcon"/>
                <span className="SideBarListItemText">Events</span>
            </li>
            <li className="sideBarListItem">
                <School className="sideBarIcon"/>
                <span className="SideBarListItemText">Course</span>
            </li>
            <li className="sideBarListItem">
                <RssFeed className="sideBarIcon"/>
                <span className="SideBarListItemText">Feed</span>
            </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
        {Users.map(u=>(
            <CloseFriend key={u.id} user={u} />
        ))}
        </ul>
     </div>
    </div>
  )
}
