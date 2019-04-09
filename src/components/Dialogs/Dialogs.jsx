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

let dialogsData = [
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
]

let messagesData = [
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
]

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  )
}

export default Dialogs;
