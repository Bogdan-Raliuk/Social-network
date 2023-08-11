const SEND_MESSAGE = "dialogsRC/SEND_MESSAGE";

let initialState = {
	dialogsData: [
		{ id: 1, name: "Dima" },
		{ id: 2, name: "Maxim" },
		{ id: 3, name: "Andrey" },
		{ id: 4, name: "Misha" },
		{ id: 5, name: "Vlad" },
		{ id: 6, name: "Gleb" },
	],
	messagesData: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How are you" },
		{ id: 3, message: "Good morning" },
		{ id: 4, message: "Come on tomorrow at 7" },
		{ id: 5, message: "1" },
		{ id: 6, message: "2" },
	],
};

function dialogsReducer(state = initialState, action) {
	switch (action.type) {
		case SEND_MESSAGE: {
			let newMessage = {
				id: 7,
				message: action.newMessagebody,
			};
			return {
				...state,
				messagesData: [...state.messagesData, { ...newMessage }],
			};
		}
		default:
			return state;
	}
}

export const sendMessage = (newMessagebody) => ({
	type: SEND_MESSAGE,
	newMessagebody,
});

export default dialogsReducer;
