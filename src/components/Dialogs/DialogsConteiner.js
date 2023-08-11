import { compose } from "redux";
import { sendMessage } from "../../redux/dialogsReducer";
import { WithAuthRedirect } from "../hoc/AuthRedirect";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		state: state,
		isAuth: state.auth.isAuth,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageText) => {
			dispatch(sendMessage(newMessageText));
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRedirect
)(Dialogs);
