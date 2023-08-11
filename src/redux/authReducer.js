import { authAPI } from "../api/api";

const SET_USER_DATA = "authRC/SET_USER_DATA";
const SET_AUTH_ERROR = "authRC/SET_AUTH_ERROR";

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
			};
		}
		case SET_AUTH_ERROR: {
			return {
				...state,
				error: action.toggle,
			};
		}

		default:
			return state;
	}
};

export const setAuthUserData = (id, email, login, isAuth) => ({
	type: SET_USER_DATA,
	data: { id, email, login, isAuth },
});
export const getUserAuth = () => async (dispatch) => {
	let { id, email, login } = await authAPI.getUserAuth();
	dispatch(setAuthUserData(id, email, login, true));
};

export const login =
	({ Email, Password, RememberMe }) =>
	async (dispatch) => {
		const response = await authAPI.login(Email, Password, RememberMe);
		if (response.data.resultCode === 0) {
			dispatch(getUserAuth());
			dispatch(authErrorsTracking(null));
		} else {
			let message =
				response.data.messages.length > 0
					? response.data.messages[0]
					: "some error";
			dispatch(authErrorsTracking(message));
		}
	};
export const logout = () => async (dispatch) => {
	const response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};
export const authErrorsTracking = (value) => ({
	type: SET_AUTH_ERROR,
	toggle: value,
});

export default authReducer;
