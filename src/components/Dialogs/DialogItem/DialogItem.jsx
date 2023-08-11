import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
	return (
		<div className={`${style.dialog} ${style.active}`}>
			<NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
		</div>
	);
}

export default DialogItem;
