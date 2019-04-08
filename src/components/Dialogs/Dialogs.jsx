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

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Eugene" id="1" />
        <DialogItem name="Dimin" id="2" />
        <DialogItem name="Victor" id="3" />
        <DialogItem name="Kelly" id="4" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi." />
        <Message message="How are you?" />
        <Message message="Today is sunny." />
      </div>
    </div>
  )
}

export default Dialogs;
