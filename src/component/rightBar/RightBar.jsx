import "./rightBar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/icon2.png
          " alt="" />
          <span className="birthdayText"><b>Akinboyewa Dare</b> and <b>3 other friends</b> have thier birthday today  </span>
        </div>
        <img className="rigtBarAd" src="assets/post/p3.jpg" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
        {Users.map(u=>(
          <Online key={u.id} user= {u}/>
        ))}
        </ul>
      </div>
    </div>
  )
}
