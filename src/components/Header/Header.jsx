import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
	return (
		<header className={style.header}>
			<img
				src="https://clipground.com/images/logos-png-8.png"
				alt="logo"
			/>
			<div className={style.login}>
				{props.isAuth ? (
					<div>
						{props.login}
						<button onClick={props.logout}>Log out</button>
					</div>
				) : (
					<NavLink to="/login">login</NavLink>
				)}
			</div>
		</header>
	);
}

export default Header;
