import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "authRC/SET_USER_DATA";
const SET_AUTH_ERROR = "authRC/SET_AUTH_ERROR";
const SET_CAPTCHA_URL = "authRC/SET_CAPTCHA_URL";

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	error: null,
	captchaURL: null,
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
		case SET_CAPTCHA_URL: {
			return {
				...state,
				captchaURL: action.url,
			};
		}

		default:
			return state;
	}
};

export const setAuthUserData = (id, email, login, captcha, isAuth) => ({
	type: SET_USER_DATA,
	data: { id, email, login, captcha, isAuth },
});
export const getUserAuth = () => async (dispatch) => {
	let { id, email, login, captcha } = await authAPI.getUserAuth();
	dispatch(setAuthUserData(id, email, login, captcha, true));
};

export const authErrorsTracking = (value) => ({
	type: SET_AUTH_ERROR,
	toggle: value,
});
export const setCaptchaURL = (url) => ({
	type: SET_CAPTCHA_URL,
	url,
});

export const login =
	({ Email, Password, RememberMe, captcha }) =>
	async (dispatch) => {
		const response = await authAPI.login(
			Email,
			Password,
			RememberMe,
			captcha
		);
		const errorsTracing = () => {
			let message =
				response.data.messages.length > 0
					? response.data.messages[0]
					: "some error";
			dispatch(authErrorsTracking(message));
		};
		if (response.data.resultCode === 0) {
			dispatch(getUserAuth());
			dispatch(authErrorsTracking(null));
		} else if (response.data.resultCode === 10) {
			dispatch(getCaptcha());
			errorsTracing();
		} else {
			errorsTracing();
		}
	};

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};

export const getCaptcha = () => async (dispatch) => {
	const response = await securityAPI.getCaptcha();
	dispatch(setCaptchaURL(response.data.url));
};

export default authReducer;
