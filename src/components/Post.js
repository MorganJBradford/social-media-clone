import React from "react";
import PropTypes from "prop-types";

const Post = (props) => {
  return (
    <>
      <h3>{props.names}</h3>
      <p>{props.content}</p>
      <hr/>
    </>
  );
}

Post.propTypes = {
  names: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post;