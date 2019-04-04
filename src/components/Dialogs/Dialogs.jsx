import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/1">
            Eugene
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/2">
            Dimon
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/3">
            Victor
          </NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/4">
            Kelly
          </NavLink>
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