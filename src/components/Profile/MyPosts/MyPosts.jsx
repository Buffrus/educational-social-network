import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
  {
    id: 1,
    message: "Hello, World! It's my first post.",
    like_count: 1
  },
  {
    id: 2,
    message: "Today is a cool day.",
    like_count: 5
  },
  {
    id: 3,
    message: "Every day gives you an opportunity to become better.",
    like_count: 13
  },
  {
    id: 4,
    message: "You can make the world a better place.",
    like_count: 16
  }
]

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
        <Post message={postsData[0].message} like_count={postsData[0].like_count} />
        <Post message={postsData[1].message} like_count={postsData[1].like_count} />
        <Post message={postsData[2].message} like_count={postsData[2].like_count} />
        <Post message={postsData[3].message} like_count={postsData[3].like_count} />
      </div>
    </div>
  )
}

export default MyPosts;
