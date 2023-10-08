import "./share.css"
import {PermMedia   } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          {/* <img className="shareProfilePicture" src="./assets/persons/img3.jpg" alt="" /> */}
          <input placeholder="Whats's on your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareOption">
            <PermMedia className="shareIcon"/>
            <span className="shareOptiontext">Photos/Videos</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
