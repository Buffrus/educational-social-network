import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
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
];

let postsElements = posts.map( (post) => {
  return <Post message={post.message} like_count={post.like_count} />
});

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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
