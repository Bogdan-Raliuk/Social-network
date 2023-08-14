import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ModalWindow from "../../common/modalWindow/ModalWindow";

function ProfileInfo(props) {
	const [active, setActive] = useState(false);
	const [editMode, setEditMode] = useState(false);

	const onClose = () => {
		setActive(false);
	};
	const EditModeActive = () => {
		setEditMode(true);
	};
	const EditModeDontActive = (data) => {
		props.saveProfile(data);
		setEditMode(false);
	};

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
			<br />
			<img
				src={
					props.profile?.photos.small != null
						? props.profile.photos.small
						: "https://webstockreview.net/images/clipart-border-art-deco-1.png"
				}
				alt="profile-img"
				className={style.profile_image}
			/>
			<br />
			{props.isOwner && (
				<input
					type="file"
					onChange={onSelectPhoto}
				/>
			)}
			<div className={style.description_block}>
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

				<section>
					<button
						className={style.aboutMeBtn}
						onClick={() => setActive(true)}>
						About me
					</button>
					{active ? (
						<ModalWindow
							profile={props.profile}
							editMode={editMode}
							isOwner={props.isOwner}
							onClose={onClose}
							title="About me:"
							EditModeActive={EditModeActive}
							EditModeDontActive={EditModeDontActive}>
							<p>
								lookingForAJob:{" "}
								{props.profile.lookingForAJob ? "yes" : "no"}
								{props.profile.lookingForAJob && (
									<div>
										<b>
											{
												props.profile
													.lookingForAJobDescription
											}
										</b>
									</div>
								)}
							</p>
							<h3>Contacts:</h3>
							<div>
								{Object.keys(props.profile.contacts).map(
									(key) => {
										return (
											<Contacts
												key={key}
												contactTitle={key}
												contactValues={
													props.profile.contacts[key]
												}
											/>
										);
									}
								)}
							</div>
						</ModalWindow>
					) : (
						""
					)}
				</section>
			</div>
		</main>
	);
}

const Contacts = ({ contactTitle, contactValues }) => {
	return (
		<p className={style.contacts}>
			<b>{contactTitle}:</b>
			{contactValues ? <a href={contactValues}>{contactValues}</a> : "no"}
		</p>
	);
};

export default ProfileInfo;
