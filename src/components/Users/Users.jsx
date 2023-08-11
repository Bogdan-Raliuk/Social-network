import Paginator from "../common/paginator/Paginator";
import User from "./User";

function Users({
	totalItemsCount,
	pageSize,
	currentPage,
	onPageChanged,
	users,
	followingInProgress,
	follow,
	unfollow,
}) {
	return (
		<div>
			<Paginator
				{...{ totalItemsCount, pageSize, currentPage, onPageChanged }}
			/>
			{users.map((user) => (
				<User
					key={user.id}
					{...{ user, followingInProgress, follow, unfollow }}
				/>
			))}
		</div>
	);
}

export default Users;
