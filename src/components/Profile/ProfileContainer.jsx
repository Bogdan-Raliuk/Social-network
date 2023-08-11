import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";
import { getStatus, updateStatus } from "../../redux/profileReducer";

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userID = this.props.router.params.userID;
		if (!userID) {
			userID = this.props.myProfileID;
		}
		this.props.getUserProfile(userID);
		this.props.getStatus(userID);
	}

	render() {
		return <Profile {...this.props} />;
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	myProfileID: state.auth.id,
});

export default compose(
	connect(mapStateToProps, {
		getUserProfile,
		getStatus,
		updateStatus,
	}),
	withRouter,
	WithAuthRedirect
)(ProfileContainer);
