import React from "react";
import style from "./ModalWindow.module.css";
import ProfileInfoForm from "../../Profile/ProfileInfo/ProfileInfoForm/ProfileInfoForm";

const ModalWindow = ({
	children,
	title,
	onClose,
	isOwner,
	editMode,
	EditModeActive,
	EditModeDontActive,
	profile,
}) => {
	return isOwner && editMode ? (
		<ProfileInfoForm
			profile={profile}
			onSave={EditModeDontActive}
			onClose={onClose}
		/>
	) : (
		<div className={style.modal}>
			<div className={style.modalContent}>
				<div className={style.title}>
					<h1>{title}</h1>
				</div>
				<div className={style.content}>{children}</div>
				<div className={style.footer}>
					<button
						className={style.btn}
						onClick={onClose}>
						close
					</button>
					{isOwner ? (
						<button
							className={style.btn}
							onClick={EditModeActive}>
							Edit
						</button>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default ModalWindow;
