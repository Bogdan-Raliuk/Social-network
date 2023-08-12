import React from "react";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
	const onSelectPhoto = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	};

	return (
		<main>
			<img
				src={
					props.profile?.photos.large != null
						? props.profile.photos.large
						: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1"
				}
				alt="main"
				className={style.background_photo}
			/>
			{props.isOwner && (
				<input
					type="file"
					onChange={onSelectPhoto}
				/>
			)}
			<br />
			<div className={style.description_block}>
				<img
					src={
						props.profile?.photos.small != null
							? props.profile.photos.small
							: "https://webstockreview.net/images/clipart-border-art-deco-1.png"
					}
					alt="profile-img"
					className={style.profile_image}
				/>

				<h1>
					{props.profile?.fullName != null
						? props.profile.fullName
						: "Name Not Found"}
				</h1>

				<ProfileStatus
					status={props.status}
					updateStatus={props.updateStatus}
				/>

				<h3>
					{props.profile?.aboutMe != null
						? props.profile.aboutMe
						: "..."}
				</h3>
			</div>
		</main>
	);
}

export default ProfileInfo;
