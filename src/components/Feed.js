import React from "react";
import Post from "./Post";

const postList = [
  {
    names: "Greg",
    content: "Good morning!"
  },
  {
    names: "Haley",
    content: "Hello world!"
  },
  {
    names: "Billy-Bob",
    content: "How's it going?"
  }
];

const Feed = () => {
  return (
    <>
      <input placeholder="What's happening?"></input>
      <hr/>
      {postList.map((post, index) =>
        <Post names={post.names}
          content={post.content}
          key={index}/>
      )}
    </>
  );
}

export default Feed;