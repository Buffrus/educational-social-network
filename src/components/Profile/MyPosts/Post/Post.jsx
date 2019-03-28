import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
    <div className={classes.item}>
      <img src='https://yt3.ggpht.com/a-/AN66SAwEbOZ5FfXxP1836Z_aI4OETtJPCQfKDo5d_w=s900-mo-c-c0xffffffff-rj-k-no'></img>
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post;