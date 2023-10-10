import "./post.css"
import {MoreVert  } from "@mui/icons-material";

export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/persons/img9.png" alt=""  />
                    <span className="postUsername">Akere Adetola</span>
                    <span className="postDate"> 5mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>   
                </div>  
            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post :) </span>
                <img className="postImg" src="/assets/post/p1.jpg" alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="likeIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter"> 32 people liked it</span>
              </div>
              <div className="postBottomRight">
                <span className="postText">9 comments</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
