import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";

function Profile(props) {
	return (
		<main>
			<ProfileInfo
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				savePhoto={props.savePhoto}
			/>
			<MyPostsConteiner />
		</main>
	);
}

export default Profile;
