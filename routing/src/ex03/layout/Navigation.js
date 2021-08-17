import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Styles from "../assets/scss/layout/Navigation.scss";

export default function Navigation() {
	return (
		<nav className={Styles.Main}>
			<ul>
				<li>
					<NavLink to={"/guestbook"}>Guestbook</NavLink>
				</li>
				<li>
					<NavLink to={"/gallery"}>Gallery</NavLink>
				</li>
				<li>
					<NavLink to={"/about"}>About</NavLink>
				</li>
			</ul>
		</nav>
	);
}
