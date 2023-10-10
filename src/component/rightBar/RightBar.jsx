import "./rightBar.css"

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/icon2.png
          " alt="" />
          <span className="birthdayText"><b>Akinboyewa Dare</b> and <b>3 other friends</b> have a birthday today  </span>
        </div>
        <img className="rigtBarAd" src="assets/post/p5.jpg" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img className="rightBarProfileImg" src="" alt=""  />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
