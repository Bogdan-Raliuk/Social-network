import React from "react";

class ProfileStatusLegasy extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activateEditMode = () => {
		this.setState({ editMode: true });
	};
	deactivateEditMode = () => {
		this.setState({ editMode: false });
		this.props.updateStatus(this.state.status);
	};
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	inputTracking = (e) => {
		if (e.keyCode === 13) this.deactivateEditMode();
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			});
		}
	}

	render() {
		return (
			<>
				{this.state.editMode ? (
					<div>
						<input
							onKeyDown={this.inputTracking}
							onChange={this.onStatusChange}
							onBlur={this.deactivateEditMode}
							autoFocus={true}
							value={this.state.status}
						/>
					</div>
				) : (
					<div>
						<span onClick={this.activateEditMode}>
							{this.props.status || "Click for edit status"}
						</span>
					</div>
				)}
			</>
		);
	}
}

export default ProfileStatusLegasy;
