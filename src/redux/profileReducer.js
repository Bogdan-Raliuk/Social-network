import { profileAPI, userAPI } from "../api/api";

const ADD_POST = "profileRC/ADD_POST";
const SET_USER_PROFILE = "profileRC/SET_USER_PROFILE";
const SET_STATUS = "profileRC/SET_STATUS";
const POST_DELETE = "profileRC/POST_DELETE";

let initialState = {
	postsData: [
		{ id: 1, message: "Hi", likeCount: "15" },
		{ id: 2, message: "i'm learn ReactJS", likeCount: "25" },
	],
	profile: null,
	status: "",
};

function profileReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: action.postText,
				likeCount: 0,
			};
			return {
				...state,
				postsData: [...state.postsData, { ...newPost }],
			};
		}
		case POST_DELETE: {
			return {
				...state,
				postsData: state.postsData.filter(
					(p) => p.id !== action.postID
				),
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		default:
			return state;
	}
}

export const addPost = (postText) => ({
	type: ADD_POST,
	postText,
});
export const deletePost = (postID) => ({
	type: POST_DELETE,
	postID,
});

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});

export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});

export const getUserProfile = (userID) => async (dispatch) => {
	const response = await userAPI.getUserProfile(userID);
	dispatch(setUserProfile(response.data));
};

export const getStatus = (userID) => async (dispatch) => {
	const response = await profileAPI.getStatus(userID);
	dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export default profileReducer;
