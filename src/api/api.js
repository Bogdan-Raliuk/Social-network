import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "dc19408a-a803-4c6f-bf49-90aa3d119f9c",
	},
});

export const userAPI = {
	getUser(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},

	getUserProfile(userID) {
		return profileAPI.getUserProfile(userID);
	},

	follow(userId) {
		return instance
			.post(`follow/${userId}`, {})
			.then((response) => response.data);
	},

	unfollow(userId) {
		return instance
			.delete(`follow/${userId}`)
			.then((response) => response.data);
	},
};

export const profileAPI = {
	getUserProfile(userID) {
		return instance.get(`profile/${userID}`);
	},
	getStatus(userID) {
		return instance.get(`profile/status/${userID}`);
	},
	updateStatus(status) {
		return instance.put(`/profile/status`, { status: status });
	},
};

export const authAPI = {
	getUserAuth() {
		return instance.get("auth/me").then((response) => {
			if (response.data.resultCode === 0) {
				return response.data.data;
			}
		});
	},
	login(email, password, rememberMe = false) {
		return instance.post("auth/login", { email, password, rememberMe });
	},
	logout() {
		return instance.delete("auth/login");
	},
};
