import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	"API-KEY": "df6a3512-4555-46ff-ab23-819d0431c095",
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
	async getUserAuth() {
		const response = await instance.get("auth/me");
		if (response.data.resultCode === 0) {
			return response.data.data;
		}
	},
	login(email, password, rememberMe = false) {
		return instance.post("auth/login", { email, password, rememberMe });
	},
	logout() {
		return instance.delete("auth/login");
	},
};
