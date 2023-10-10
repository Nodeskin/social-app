import Post from "../post/Post"
import Share from "../share/Share"
import "./feeds.css"

export default function Feeds() {
  return (
    <div className="feeds">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

