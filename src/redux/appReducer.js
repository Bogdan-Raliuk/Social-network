import { getUserAuth } from "./authReducer";

const INITIALIZED_SUCCESS = "appRC/INITIALIZED_SUCCESS";

const initialState = {
	initialized: false,
};

function appReducer(state = initialState, action) {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return { ...state, initialized: true };
		default:
			return state;
	}
}

export const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS,
});
export const initializeApp = () => (dispatch) => {
	dispatch(getUserAuth());
	dispatch(initializedSuccess());
};

export default appReducer;
