import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.message}
    </div>
  )
}

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

let dialogsElements = dialogs.map( (dialog) => {
  return <DialogItem name={dialog.name} id={dialog.id} />
});

let messeges = [
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

let messagesElements = messeges.map( (message) => {
  return <Message message={message.message} />
});

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
