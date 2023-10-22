import "./rightBar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function RightBar({profile}) {
  
  const HomeRightBar = ()=> {
    return(
      <>
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
      </>
    )
  }

  const ProfileRightBar = () =>{
    return(
      <>
        <h4 className="rightBarTitle">User Information</h4>
      <div className="rightBarInfo">
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City:</span>
          <span className="rightBarInfoValue">New York</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">from:</span>
          <span className="rightBarInfoValue">Madrid</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship:</span>
          <span className="rightBarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightBarTitle">User friends</h4>
      <div className="rightBarFollowings">
      <div className="rightBarFollowing">
        <img className="rightBarFollowingImg" src="assets/post/p6.jpg" alt="" />
        <span className="rightBarFollowingName">Rere Abu</span>
        </div>
      <div className="rightBarFollowing">
        <img className="rightBarFollowingImg" src="assets/post/p5.jpg" alt="" />
        <span className="rightBarFollowingName">Jason Derullo</span>
        </div>
      <div className="rightBarFollowing">
        <img className="rightBarFollowingImg" src="assets/post/p4.jpg" alt="" />
        <span className="rightBarFollowingName">Abab Hompson</span>
        </div>
      <div className="rightBarFollowing">
        <img className="rightBarFollowingImg" src="assets/post/p3.jpg" alt="" />
        <span className="rightBarFollowingName">Shalimat Obeda</span>
        </div>

      </div>
      </>
    )
  }
  
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
         <ProfileRightBar/>
      </div>
    </div>
  )
}
