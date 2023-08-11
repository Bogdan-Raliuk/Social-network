import { userAPI } from "../api/api";
import { updateObjectPropInArray } from "../utils/object-helpers";
const FOLLOW = "userRC/FOLLOW";
const UNFOLLOW = "userRC/UNFOLLOW";
const SET_USERS = "userRC/SET_USERS";
const SET_CURRENT_PAGE = "userRC/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "userRC/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "userRC/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "userRC/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

function usersReducer(state = initialState, action) {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectPropInArray(
					state.users,
					action.userID,
					"id",
					{ followed: true }
				),
			};

		case UNFOLLOW:
			return {
				...state,
				users: updateObjectPropInArray(
					state.users,
					action.userID,
					"id",
					{ followed: false }
				),
			};
		case SET_USERS:
			return { ...state, users: action.users };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalUsersCount };
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.userID]
					: state.followingInProgress.filter(
							(id) => id !== action.userID
					  ),
			};

		default:
			return state;
	}
}

export const setUsers = (users) => ({ type: SET_USERS, users });
export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount,
});
export const setIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});
export const setFollowing = (followingInProgress, userID) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	followingInProgress,
	userID,
});

export const getUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(setIsFetching(true));
		const response = await userAPI.getUser(currentPage, pageSize);
		dispatch(setCurrentPage(currentPage));
		dispatch(setIsFetching(false));
		dispatch(setUsers(response.items));
		dispatch(setTotalUsersCount(response.totalCount));
	};
};

export const followUnfollowFlow = async (
	dispatch,
	userID,
	apiMethod,
	actionCreator
) => {
	dispatch(setFollowing(true, userID));
	const response = await apiMethod(userID);
	if (response.resultCode === 0) {
		dispatch(actionCreator(userID));
	}
	dispatch(setFollowing(false, userID));
};

export const unfollow = (userID) => {
	return (dispatch) => {
		followUnfollowFlow(
			dispatch,
			userID,
			userAPI.unfollow.bind(userAPI),
			unfollowSuccess
		);
	};
};

export const follow = (userID) => {
	return (dispatch) => {
		followUnfollowFlow(
			dispatch,
			userID,
			userAPI.follow.bind(userAPI),
			followSuccess
		);
	};
};

export default usersReducer;
