import Post from "../post/Post"
import Share from "../share/Share"
import "./feeds.css"
import {Posts} from "../../dummyData"

export default function Feeds() {
  return (
    <div className="feeds">
      <div className="feedWrapper">
        <Share/>
        {Posts.map(( post) => <Post key={post.id} post= {post}/>)}
        
       
      </div>
    </div>
  )
}

