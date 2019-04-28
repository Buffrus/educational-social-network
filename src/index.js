import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let dialogs = [
  {
    id: 1,
    name: "Eugene"
  },
  {
    id: 2,
    name: "Dimon"
  },
  {
    id: 3,
    name: "Victor"
  },
  {
    id: 4,
    name: "Kelly"
  }
];

let messages = [
  {
    id: 1,
    message: "Hi."
  },
  {
    id: 2,
    message: "How are you?"
  },
  {
    id: 3,
    message: "Today is sunny."
  },
  {
    id: 4,
    message: "Never give up!"
  }
];


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
