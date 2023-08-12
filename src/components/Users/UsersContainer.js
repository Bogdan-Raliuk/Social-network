import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { getUsers, follow, unfollow } from "../../redux/usersReducer";
import PreloaderChild from "../common/preloader/preloader";
import { compose } from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getPageSize,
	getTotalUsersCount,
	getUser,
} from "../../redux/selectors/usersSelectors";

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged(p) {
		this.props.getUsers(p, this.props.pageSize);
	}

	render() {
		return (
			<PreloaderChild>
				<Users
					{...this.props}
					onPageChanged={this.onPageChanged.bind(this)}
				/>
			</PreloaderChild>
		);
	}
}
let mapStateToProps = (state) => {
	return {
		users: getUser(state),
		pageSize: getPageSize(state),
		totalItemsCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		followingInProgress: getFollowingInProgress(state),
	};
};

export default compose(
	connect(mapStateToProps, {
		getUsers,
		follow,
		unfollow,
	})
)(UsersAPIComponent);
