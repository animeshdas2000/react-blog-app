import React, { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
function Blog() {
    const [like,setLike] = useState(false)
  return (
    <div className="container-fluid">
      <h1>blog.title</h1>
      <img src={"https://picsum.photos/200/300"} alt="" />
      <span>Author Date</span>
      <div>
        <p>Body</p>
      </div>

        {like?<FaRegThumbsUp/>:<FaThumbsUp/>}  
    </div>
  );
}

export default Blog;
