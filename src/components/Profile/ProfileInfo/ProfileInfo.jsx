import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ModalWindow from "../../common/modalWindow/ModalWindow";

function ProfileInfo(props) {
	const [active, setActive] = useState(false);

	const onClose = () => {
		setActive(false);
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
					<button onClick={() => setActive(true)}>About me</button>
					{active ? (
						<ModalWindow
							onClose={onClose}
							title="About me:">
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
							<p>
								<b>github:</b>
								{props.profile.contacts.github ? (
									<a
										href={`https://${props.profile.contacts.github}`}>
										{props.profile.contacts.github}
									</a>
								) : (
									"no"
								)}
							</p>
							<p>
								<b>vk:</b>
								{props.profile.contacts.vk ? (
									<a
										href={`https://${props.profile.contacts.vk}`}>
										{props.profile.contacts.vk}
									</a>
								) : (
									"no"
								)}
							</p>
							<p>
								<b>facebook:</b>
								{props.profile.contacts.facebook ? (
									<a
										href={`https://${props.profile.contacts.facebook}`}>
										{props.profile.contacts.facebook}
									</a>
								) : (
									"no"
								)}
							</p>
							<p>
								<b>instagram:</b>
								{props.profile.contacts.instagram ? (
									<a
										href={`https://${props.profile.contacts.instagram}`}>
										{props.profile.contacts.instagram}
									</a>
								) : (
									"no"
								)}
							</p>
							<p>
								<b>twitter:</b>
								{props.profile.contacts.twitter ? (
									<a
										href={`${props.profile.contacts.twitter}`}>
										{props.profile.contacts.twitter}
									</a>
								) : (
									"no"
								)}
							</p>
							<p>
								<b>website:</b>
								{props.profile.contacts.website ? (
									<a
										href={`${props.profile.contacts.website}`}>
										{props.profile.contacts.website}
									</a>
								) : (
									"no"
								)}
							</p>
							<p>
								<b>youtube:</b>
								{props.profile.contacts.youtube ? (
									<a
										href={`${props.profile.contacts.youtube}`}>
										{props.profile.contacts.youtube}
									</a>
								) : (
									"no"
								)}
							</p>
							<p>
								<b>mainLink:</b>
								{props.profile.contacts.mainLink ? (
									<a
										href={`${props.profile.contacts.mainLink}`}>
										{props.profile.contacts.mainLink}
									</a>
								) : (
									"no"
								)}
							</p>
						</ModalWindow>
					) : (
						""
					)}
				</section>
			</div>
		</main>
	);
}

export default ProfileInfo;
