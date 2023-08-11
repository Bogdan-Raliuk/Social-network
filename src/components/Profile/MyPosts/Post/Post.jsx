import React from "react";
import style from "./Post.module.css";

function Post(props) {
	return (
		<div className={style.main}>
			<div className={style.item}>
				<img
					src="https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png"
					alt="avatar"
				/>
				{props.message}
				<p>likes:{props.likes}</p>
			</div>
		</div>
	);
}

export default Post;
