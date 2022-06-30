import React from "react";

const Post = post => {
   return (
      <>
         <img src={post.thumb}/>
         <h6>{post.bio}</h6>
      </>
   )
}

export default Post;