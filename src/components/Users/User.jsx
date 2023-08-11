import { NavLink } from "react-router-dom";
import style from "./Users.module.css";

function User({ user, followingInProgress, follow, unfollow }) {
	return (
		<div>
			<span>
				<div>
					<NavLink to={`/profile/${user.id}`}>
						<img
							className={style.avatar}
							src={
								user.photos.small != null
									? user.photos.small
									: "https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png"
							}
							alt="img"
						/>
					</NavLink>
				</div>
				<div>
					{user.followed ? (
						<button
							disabled={followingInProgress.some(
								(id) => id === user.id
							)}
							onClick={() => {
								unfollow(user.id);
							}}>
							unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some(
								(id) => id === user.id
							)}
							onClick={() => {
								follow(user.id);
							}}>
							follow
						</button>
					)}
				</div>
			</span>
			<span>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
				<span>
					<div>country</div>
					<div>city</div>
				</span>
			</span>
		</div>
	);
}

export default User;
