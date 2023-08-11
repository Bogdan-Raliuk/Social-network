import React, { useEffect, useState } from "react";

function ProfileStatus(props) {
	let [status, setStatus] = useState(props.status);
	let [editMode, setEditMode] = useState(false);
	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	};
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	const inputTracking = (e) => {
		if (e.keyCode === 13) deactivateEditMode();
	};

	return (
		<>
			{editMode ? (
				<div>
					<input
						onKeyDown={inputTracking}
						onChange={onStatusChange}
						onBlur={deactivateEditMode}
						autoFocus={true}
						value={status}
					/>
				</div>
			) : (
				<div>
					<span onClick={activateEditMode}>
						{props.status || "Click for edit status"}
					</span>
				</div>
			)}
		</>
	);
}

export default ProfileStatus;
