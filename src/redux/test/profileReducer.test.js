import profileReducer, { addPost, deletePost } from "../profileReducer";

let state = {
	postsData: [
		{ id: 1, message: "Hi", likeCount: "15" },
		{ id: 2, message: "i'm learn ReactJS", likeCount: "25" },
	],
};

describe("Profile Reducer", () => {
	it("ProfileReducer: add new post", () => {
		let action = addPost("new post");

		let newState = profileReducer(state, action);
		expect(newState.postsData.length).toBe(3);
	});

	it("ProfileReducer: message is correct", () => {
		let action = addPost("new post");

		let newState = profileReducer(state, action);
		expect(newState.postsData[2].message).toBe("new post");
	});

	it("post should be deleted:postData.length === 1", () => {
		let action = deletePost(2);

		let newState = profileReducer(state, action);
		expect(newState.postsData.length).toBe(1);
	});
});
