import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.postBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message="Hello, World! It's my first post." like_count="20" />
        <Post message="Today is a cool day." like_count="15" />
      </div>
    </div>
  )
}

export default MyPosts;
