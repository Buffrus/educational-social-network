import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + " " + classes.active}>
        Alex
        </div>
        <div className={classes.dialog}>
        Eugene
        </div>
        <div className={classes.dialog}>
        Dimon
        </div>
        <div className={classes.dialog}>
        Victor
        </div>
        <div className={classes.dialog}>
        Kelly
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>
        Hi.
        </div>
        <div className={classes.message}>
        How are you?
        </div>
        <div className={classes.message}>
        Today is sunny.
        </div>
      </div>
    </div>
  )
}

export default Dialogs;