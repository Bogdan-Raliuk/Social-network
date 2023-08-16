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
		return instance.put(`profile/status`, { status: status });
	},
	savePhoto(photo) {
		const formData = new FormData();
		formData.append("image", photo);
		return instance.put(`profile/photo`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile);
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
	login(email, password, rememberMe = false, captcha) {
		return instance.post("auth/login", {
			email,
			password,
			rememberMe,
			captcha,
		});
	},
	logout() {
		return instance.delete("auth/login");
	},
};
export const securityAPI = {
	getCaptcha() {
		return instance.get("security/get-captcha-url");
	},
};
